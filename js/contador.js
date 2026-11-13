/*
 * Total de páginas vistas en el pie del portal / Page-view total in the portal footer.
 * El recuento lo hace GoatCounter (sin cookies) con el script de index.html; este archivo solo lee el
 * total público (josemagalan.goatcounter.com/counter/TOTAL.json) y lo muestra. Si la petición falla
 * (sin conexión, bloqueador de contenido, contador no activado), no muestra nada.
 */
(function () {
  'use strict';
  const PANEL = 'https://josemagalan.goatcounter.com/';
  const node = document.getElementById('visit-count');
  if (!node || !window.fetch) return;
  let total = null;
  function render() {
    if (total === null) return;
    const es = (document.documentElement.lang || 'es').slice(0, 2) !== 'en';
    node.textContent = (es ? 'Páginas vistas: ' : 'Page views: ') + total;
    node.hidden = false;
  }
  fetch(PANEL + 'counter/TOTAL.json')
    .then((response) => (response.ok ? response.json() : Promise.reject(new Error(response.status))))
    .then((data) => { if (data && data.count) { total = data.count; render(); } })
    .catch(() => {});
  new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
