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

    const effectiveFbp = fbp || cookies['_fbp'];
    let effectiveFbc = fbc || cookies['_fbc'];

    // Se houver fbclid na URL e não houver fbc, criar no formato canónico da Meta: fb.1.<timestamp>.<fbclid>
    if (!effectiveFbc) {
      try {
        const targetUrl = event_source_url || (req.headers.referer as string) || '';
        if (targetUrl) {
          const urlObj = new URL(targetUrl, 'https://rumos-seguros.com');
          const fbclid = urlObj.searchParams.get('fbclid');
          if (fbclid) {
            effectiveFbc = `fb.1.${Date.now()}.${fbclid}`;
          }
        }
      } catch (e) {}
    }

    const payload = {
      data: [
        {
          event_name: event_name || 'PageView',
          event_time: Math.floor(Date.now() / 1000),
          event_id: event_id || `capi_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          event_source_url: event_source_url || req.headers.referer || 'https://rumos-seguros.com',
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

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
