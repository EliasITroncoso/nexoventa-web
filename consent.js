(function () {
  const storageKey = 'nexoventa-analytics-consent-v1';
  let choice = null;

  try {
    choice = localStorage.getItem(storageKey);
  } catch (_) {}

  const banner = document.createElement('section');
  banner.className = 'cookie-consent';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-labelledby', 'cookie-consent-title');
  banner.setAttribute('aria-describedby', 'cookie-consent-copy');
  banner.hidden = choice === 'accepted' || choice === 'rejected';
  banner.innerHTML = '<div class="cookie-consent-copy"><strong id="cookie-consent-title">Tu privacidad importa</strong><p id="cookie-consent-copy">Usamos herramientas de analítica para entender el uso del sitio. Solo se activan si las aceptás. <a href="privacidad.html">Leer política de privacidad</a>.</p></div><div class="cookie-consent-actions"><button type="button" class="cookie-reject">Rechazar</button><button type="button" class="cookie-accept">Aceptar analítica</button></div>';

  const settings = document.createElement('button');
  settings.className = 'cookie-settings';
  settings.type = 'button';
  settings.textContent = 'Preferencias de cookies';
  settings.setAttribute('aria-label', 'Abrir preferencias de cookies');
  settings.addEventListener('click', function () {
    banner.hidden = false;
    banner.querySelector('.cookie-accept').focus();
  });

  document.body.append(banner, settings);

  function loadAnalytics() {
    if (window.__nexoAnalyticsLoaded) return;
    window.__nexoAnalyticsLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    window.gtag('js', new Date());
    window.gtag('config', 'G-QBEVER3PJH');
    const google = document.createElement('script');
    google.async = true;
    google.src = 'https://www.googletagmanager.com/gtag/js?id=G-QBEVER3PJH';
    document.head.appendChild(google);

    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
    window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });
    const clarity = document.createElement('script');
    clarity.async = true;
    clarity.src = 'https://www.clarity.ms/tag/yv64ij3fa3';
    document.head.appendChild(clarity);
  }

  function saveChoice(value) {
    choice = value;
    try {
      localStorage.setItem(storageKey, value);
    } catch (_) {}
    banner.hidden = true;
    if (value === 'accepted') {
      loadAnalytics();
    } else if (window.__nexoAnalyticsLoaded) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
      window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' });
      window.clarity('consent', false);
    }
  }

  banner.querySelector('.cookie-accept').addEventListener('click', function () { saveChoice('accepted'); });
  banner.querySelector('.cookie-reject').addEventListener('click', function () { saveChoice('rejected'); });

  if (choice === 'accepted') loadAnalytics();
})();
