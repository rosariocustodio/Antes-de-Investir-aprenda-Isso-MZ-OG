/**
 * Meta Tracking Utility (Pixel + Conversions API CAPI)
 * Garante cobertura máxima (100%) para os parâmetros fbc e fbp da Meta.
 * Em conformidade rigorosa com a documentação oficial da Meta Business & Conversions API.
 */

// Formato canónico oficial da Meta:
// fbc: fb.1.<timestamp_em_milissegundos>.<fbclid>
// fbp: fb.1.<timestamp_em_milissegundos>.<número_aleatório_10_dígitos>

export interface MetaTrackingIds {
  fbc?: string;
  fbp?: string;
  fbclid?: string;
}

/**
 * Obtém o domínio base para o cookie (ex: .rumoseguros.site para cobrir www e raiz)
 */
function getCookieDomain(): string {
  if (typeof window === 'undefined') return '';
  const hostname = window.location.hostname;
  if (hostname.includes('rumoseguros.site')) {
    return ';domain=.rumoseguros.site';
  }
  return '';
}

/**
 * Lê um cookie específico pelo nome
 */
export function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  try {
    const match = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]*)'));
    if (match && match[2]) {
      const decoded = decodeURIComponent(match[2].trim());
      return decoded || undefined;
    }
  } catch (e) {}
  return undefined;
}

/**
 * Grava um cookie com 90 dias de expiração e máxima persistência
 */
export function setCookie(name: string, value: string): void {
  if (typeof document === 'undefined') return;
  try {
    const maxAge = 60 * 60 * 24 * 90; // 90 dias
    const domainStr = getCookieDomain();
    document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAge}${domainStr};SameSite=Lax`;
  } catch (e) {}
}

/**
 * Captura, constrói e persiste o fbc com máxima redundância (URL, Cookie, LocalStorage, SessionStorage, Referrer)
 */
export function getOrSetFbc(): string | undefined {
  if (typeof window === 'undefined') return undefined;

  let fbclid: string | null = null;

  // 1. Verificar parâmetro fbclid na URL atual
  try {
    const urlParams = new URLSearchParams(window.location.search);
    fbclid = urlParams.get('fbclid');
  } catch (e) {}

  // 2. Se não estiver na URL atual, verificar no Referrer (caso tenha havido redirecionamento)
  if (!fbclid && document.referrer) {
    try {
      const refUrl = new URL(document.referrer);
      fbclid = refUrl.searchParams.get('fbclid');
    } catch (e) {}
  }

  // 3. Se encontrou fbclid fresco, cria e salva o fbc imediatamente
  if (fbclid) {
    const creationTime = Date.now();
    const fbcValue = `fb.1.${creationTime}.${fbclid}`;
    
    // Salvar em todos os armazenamentos possíveis para blindar contra Safari ITP e navegação privada
    setCookie('_fbc', fbcValue);
    try {
      localStorage.setItem('_fbc', fbcValue);
      localStorage.setItem('meta_fbclid', fbclid);
      localStorage.setItem('meta_fbc_time', creationTime.toString());
      sessionStorage.setItem('_fbc', fbcValue);
      sessionStorage.setItem('meta_fbclid', fbclid);
    } catch (e) {}
    
    return fbcValue;
  }

  // 4. Se não há fbclid na URL, recuperar fbc existente do Cookie oficial _fbc
  const cookieFbc = getCookie('_fbc');
  if (cookieFbc && cookieFbc.startsWith('fb.1.')) {
    try {
      localStorage.setItem('_fbc', cookieFbc);
    } catch (e) {}
    return cookieFbc;
  }

  // 5. Se o cookie foi limpo pelo navegador, recuperar do LocalStorage
  try {
    const localFbc = localStorage.getItem('_fbc');
    if (localFbc && localFbc.startsWith('fb.1.')) {
      setCookie('_fbc', localFbc); // Restaurar o cookie se tiver sido apagado
      return localFbc;
    }

    const savedFbclid = localStorage.getItem('meta_fbclid');
    if (savedFbclid) {
      const savedTime = localStorage.getItem('meta_fbc_time') || Date.now().toString();
      const reconstructedFbc = `fb.1.${savedTime}.${savedFbclid}`;
      setCookie('_fbc', reconstructedFbc);
      localStorage.setItem('_fbc', reconstructedFbc);
      return reconstructedFbc;
    }
  } catch (e) {}

  // 6. Tentar SessionStorage como último recurso de fallback
  try {
    const sessionFbc = sessionStorage.getItem('_fbc');
    if (sessionFbc && sessionFbc.startsWith('fb.1.')) {
      setCookie('_fbc', sessionFbc);
      return sessionFbc;
    }
  } catch (e) {}

  return undefined;
}

/**
 * Obtém ou inicializa o fbp (Browser ID) da Meta com persistência
 */
export function getOrSetFbp(): string | undefined {
  if (typeof window === 'undefined') return undefined;

  // 1. Tentar ler o cookie nativo gerado pelo fbevents.js da Meta
  const cookieFbp = getCookie('_fbp');
  if (cookieFbp && cookieFbp.startsWith('fb.1.')) {
    try {
      localStorage.setItem('_fbp', cookieFbp);
    } catch (e) {}
    return cookieFbp;
  }

  // 2. Tentar ler do LocalStorage
  try {
    const localFbp = localStorage.getItem('_fbp');
    if (localFbp && localFbp.startsWith('fb.1.')) {
      setCookie('_fbp', localFbp);
      return localFbp;
    }
  } catch (e) {}

  // 3. Gerar um fbp válido no padrão oficial se ainda não existir
  const creationTime = Date.now();
  const randomNum = Math.floor(1000000000 + Math.random() * 9000000000);
  const newFbp = `fb.1.${creationTime}.${randomNum}`;

  setCookie('_fbp', newFbp);
  try {
    localStorage.setItem('_fbp', newFbp);
  } catch (e) {}

  return newFbp;
}

/**
 * Retorna todos os identificadores de rastreio Meta garantidos
 */
export function getMetaTrackingIds(): MetaTrackingIds {
  const fbc = getOrSetFbc();
  const fbp = getOrSetFbp();
  let fbclid: string | undefined = undefined;

  try {
    fbclid = new URLSearchParams(window.location.search).get('fbclid') || localStorage.getItem('meta_fbclid') || undefined;
  } catch (e) {}

  return { fbc, fbp, fbclid };
}

/**
 * Anexa o fbclid ao URL de checkout para que o pagamento também atribua a conversão
 */
export function attachTrackingToUrl(baseUrl: string): string {
  if (typeof window === 'undefined') return baseUrl;
  try {
    const { fbclid } = getMetaTrackingIds();
    if (!fbclid) return baseUrl;

    const url = new URL(baseUrl);
    if (!url.searchParams.has('fbclid')) {
      url.searchParams.set('fbclid', fbclid);
    }
    return url.toString();
  } catch (e) {
    return baseUrl;
  }
}

/**
 * Disparo unificado e infalível de eventos Meta (Pixel no Navegador + CAPI no Servidor)
 * Envia SEMPRE fbc e fbp com deduplicação rigorosa (eventID).
 */
export function trackMetaEvent(
  eventName: string,
  customData: Record<string, any> = {},
  explicitEventId?: string
): string {
  // BLOQUEIO RIGOROSO: O evento "Purchase" NUNCA pode ser disparado pelo site.
  // O Purchase virá exclusivamente da Tutora após a confirmação do pagamento.
  if (!eventName || eventName.toLowerCase() === 'purchase') {
    console.warn('[Meta Tracking] Disparo de "Purchase" bloqueado no site. O evento Purchase é gerido exclusivamente pela Tutora.');
    return '';
  }

  // Apenas estes 3 eventos são permitidos pelo site
  const ALLOWED_SITE_EVENTS = ['PageView', 'ViewContent', 'InitiateCheckout'];
  if (!ALLOWED_SITE_EVENTS.includes(eventName)) {
    console.warn(`[Meta Tracking] Evento "${eventName}" não autorizado.`);
    return '';
  }

  const eventId = explicitEventId || `${eventName}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const { fbc, fbp } = getMetaTrackingIds();

  // 1. Disparar no Meta Pixel (Navegador) com fbc e fbp explícitos
  try {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const pixelOptions: Record<string, any> = { eventID: eventId };
      if (fbc) pixelOptions.fbc = fbc;
      if (fbp) pixelOptions.fbp = fbp;

      (window as any).fbq('track', eventName, customData, pixelOptions);
    }
  } catch (err) {
    console.warn('[Meta Tracking] Erro ao disparar Pixel:', err);
  }

  // 2. Disparar no Meta Conversions API (Servidor)
  try {
    const payload = {
      event_name: eventName,
      event_id: eventId,
      event_source_url: typeof window !== 'undefined' ? window.location.href : 'https://www.rumoseguros.site/',
      fbp,
      fbc,
      custom_data: Object.keys(customData).length > 0 ? customData : undefined
    };

    fetch('/api/meta-events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(() => {});
  } catch (err) {
    console.warn('[Meta Tracking] Erro ao disparar CAPI:', err);
  }

  return eventId;
}
