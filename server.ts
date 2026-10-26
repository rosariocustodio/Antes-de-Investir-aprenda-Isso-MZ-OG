import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const META_PIXEL_ID = process.env.META_PIXEL_ID || '1433052258793282';
const META_CAPI_ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;

app.use(express.json());

// Endpoint do Meta Conversions API (Server-Side Tracking)
app.post('/api/meta-events', async (req, res) => {
  try {
    const { event_name, event_id, event_source_url, custom_data, fbp, fbc } = req.body;

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

    if (!META_CAPI_ACCESS_TOKEN) {
      return res.status(500).json({ error: 'META_CAPI_ACCESS_TOKEN not configured' });
    }

    const rawIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || '';
    const ip = rawIp.replace('::ffff:', '');
    const userAgent = req.headers['user-agent'] || '';

    // Extrair cookies HTTP (_fbp e _fbc) para garantir máxima taxa de correspondência (EMQ)
    const cookies: Record<string, string> = {};
    if (req.headers.cookie) {
      req.headers.cookie.split(';').forEach(c => {
        const [k, ...v] = c.trim().split('=');
        if (k) cookies[k] = decodeURIComponent(v.join('='));
      });
    }

    let effectiveFbp = fbp || cookies['_fbp'];
    let effectiveFbc = fbc || cookies['_fbc'];

    // Se houver fbclid em event_source_url, referer ou req.url, sintetizar fbc canónico oficial: fb.1.<timestamp>.<fbclid>
    if (!effectiveFbc) {
      const candidates = [event_source_url, req.headers.referer, req.url];
      for (const cand of candidates) {
        if (cand && typeof cand === 'string' && cand.includes('fbclid')) {
          try {
            const urlObj = new URL(cand, 'https://www.rumoseguros.site');
            const foundFbclid = urlObj.searchParams.get('fbclid');
            if (foundFbclid) {
              effectiveFbc = `fb.1.${Date.now()}.${foundFbclid}`;
              break;
            }
          } catch (e) {}
        }
      }
    }

    // Se ainda não houver fbp, gerar identificador de navegador canónico da Meta
    if (!effectiveFbp) {
      effectiveFbp = `fb.1.${Date.now()}.${Math.floor(1000000000 + Math.random() * 9000000000)}`;
    }

    // Gravar cookies 1st party via HTTP Header (imunes às restrições do Safari ITP)
    try {
      const cookieHeaders: string[] = [
        `_fbp=${encodeURIComponent(effectiveFbp)}; Path=/; Max-Age=7776000; SameSite=Lax`
      ];
      if (effectiveFbc) {
        cookieHeaders.push(`_fbc=${encodeURIComponent(effectiveFbc)}; Path=/; Max-Age=7776000; SameSite=Lax`);
      }
      res.setHeader('Set-Cookie', cookieHeaders);
    } catch (e) {}

    const payload = {
      data: [
        {
          event_name: targetEventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: event_id || `capi_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          event_source_url: event_source_url || req.headers.referer || 'https://rumoseguros.site',
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
    return res.json({ success: true, result });
  } catch (err: any) {
    console.error('Meta CAPI Error:', err);
    return res.status(500).json({ error: err.message });
  }
});

// Montar Vite em modo desenvolvimento ou ficheiros estáticos em produção
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';
  const portArgIndex = process.argv.indexOf('--port');
  const argPort = portArgIndex !== -1 ? parseInt(process.argv[portArgIndex + 1], 10) : NaN;
  const activePort = !isNaN(argPort) ? argPort : (parseInt(process.env.PORT || '3000', 10));

  const { createServer: createHttpServer } = await import('http');
  const httpServer = createHttpServer(app);

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: { server: httpServer }
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);

    // Fallback para SPA em desenvolvimento (Express 5 compatível)
    app.use(async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const fs = await import('fs');
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.use((_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  httpServer.listen(activePort, '0.0.0.0', () => {
    console.log(`Server listening on port ${activePort} (0.0.0.0)`);
  });
}

startServer();
