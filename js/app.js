(function () {
  'use strict';
  const { messages, resolveLanguage, toolHref } = window.GAPortal;
  function savedLanguage() {
    try { return localStorage.getItem('ga-portal-language'); }
    catch { return null; }
  }
  function render(language) {
    const text = messages[language];
    document.documentElement.lang = language;
    document.title = text.docTitle;
    document.querySelector('meta[name="description"]').content = text.description;
    document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = text[node.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-aria]').forEach((node) => { node.setAttribute('aria-label', text[node.dataset.i18nAria]); });
    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.disabled = false;
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });
    document.querySelectorAll('[data-tool]').forEach((link) => { link.href = toolHref(link.dataset.tool, language, link.dataset.page); });
    try { localStorage.setItem('ga-portal-language', language); }
    catch { /* The language also lives in the URL when storage is unavailable. */ }
  }
  function setLanguage(language, replace) {
    const url = new URL(window.location.href);
    const changed = url.searchParams.get('lang') !== language;
    url.searchParams.set('lang', language);
    try {
      if (replace) history.replaceState(null, '', url);
      else if (changed) history.pushState(null, '', url);
    } catch { /* Some file:// browsers restrict history. Language switching still works. */ }
    render(language);
  }
  const initial = resolveLanguage(location.search, savedLanguage(), navigator.language);
  setLanguage(initial, true);
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang, false));
  });
  window.addEventListener('popstate', () => render(resolveLanguage(location.search, savedLanguage(), navigator.language)));
})();
