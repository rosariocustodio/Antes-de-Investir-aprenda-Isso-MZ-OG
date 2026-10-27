import type { IncomingMessage, ServerResponse } from 'http';

interface VercelRequest extends IncomingMessage {
  body: any;
  query: { [key: string]: string | string[] };
  cookies: { [key: string]: string };
}

interface VercelResponse extends ServerResponse {
  send: (body: any) => VercelResponse;
  json: (jsonBody: any) => VercelResponse;
  status: (statusCode: number) => VercelResponse;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Configuração CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const META_PIXEL_ID = process.env.META_PIXEL_ID || '1433052258793282';
  const META_CAPI_ACCESS_TOKEN =
    process.env.META_CAPI_ACCESS_TOKEN ||
    'EAAOlEKz9hnQBSZCZC4KqwT80cZCluYbbbNZA12Td6QElHPA3W8zMMmZBIDwWzxFpteXmwToBuZAMdx0MM0ZCnm2XULlwZB9ecRwjw2Xlas7n7GuZBPnqqZChwZCcSp5ZAyISQ8BZBjXdhiQZBImG0DM74l6sj6Ds8MOIekNZCExwyTDYBP5mgVl9oUHLWMHwEswve7lGwZDZD';

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { event_name, event_id, event_source_url, custom_data, fbp, fbc } = body;

    // BLOQUEIO RIGOROSO: O evento "Purchase" NUNCA pode ser enviado por este site/servidor.
    // O Purchase virá apenas da Tutora após a confirmação do pagamento.
    if (event_name && (event_name === 'Purchase' || event_name.toLowerCase() === 'purchase')) {
      return res.status(403).json({
        error: 'Purchase event is strictly disallowed on this server. Purchases are handled exclusively by Tutora post-payment.'
      });
    }

    // Apenas estes 3 eventos são aceites na landing page
    const ALLOWED_EVENTS = ['PageView', 'ViewContent', 'InitiateCheckout'];
    const targetEventName = event_name || 'PageView';
    if (!ALLOWED_EVENTS.includes(targetEventName)) {
      return res.status(400).json({
        error: `Event '${targetEventName}' is not allowed on this landing page endpoint.`
      });
    }

    const rawIp =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.socket.remoteAddress ||
      '';
    const ip = rawIp.replace('::ffff:', '');
    const userAgent = (req.headers['user-agent'] as string) || '';

    // Extrair cookies HTTP (_fbp e _fbc)
    const cookies: Record<string, string> = {};
    if (req.headers.cookie) {
      req.headers.cookie.split(';').forEach(c => {
        const [k, ...v] = c.trim().split('=');
        if (k) cookies[k] = decodeURIComponent(v.join('='));
      });
    }

    const effectiveFbp = fbp || cookies['_fbp'];
    let effectiveFbc = fbc || cookies['_fbc'];

    if (!effectiveFbc) {
      try {
        const targetUrl = event_source_url || (req.headers.referer as string) || '';
        if (targetUrl) {
          const urlObj = new URL(targetUrl, 'https://rumoseguros.site');
          const fbclid = urlObj.searchParams.get('fbclid');
          if (fbclid) {
            effectiveFbc = `fb.1.${Date.now()}.${fbclid}`;
          }
        }
      } catch (e) {}
    }

    let sanitizedSourceUrl = event_source_url || (req.headers.referer as string) || 'https://www.rumoseguros.site/';
    if (sanitizedSourceUrl.includes('run.app') || sanitizedSourceUrl.includes('localhost') || sanitizedSourceUrl.includes('127.0.0.1')) {
      sanitizedSourceUrl = 'https://www.rumoseguros.site/';
    }

    const payload = {
      data: [
        {
          event_name: targetEventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: event_id || `capi_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          event_source_url: sanitizedSourceUrl,
          action_source: 'website',
          user_data: {
            client_ip_address: ip,
            client_user_agent: userAgent,
            ...(effectiveFbp ? { fbp: effectiveFbp } : {}),
            ...(effectiveFbc ? { fbc: effectiveFbc } : {})
          },
          ...(custom_data ? { custom_data } : {})
        }
      ],
      access_token: META_CAPI_ACCESS_TOKEN
    };

    const response = await fetch(`https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    return res.status(200).json({ success: true, result });
  } catch (err: any) {
    console.error('Meta CAPI Error:', err);
    return res.status(500).json({ error: err.message });
  }
}
