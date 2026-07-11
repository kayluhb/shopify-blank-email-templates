/**
 * Review UI shell (topbar + sidebar + iframe preview).
 * Index stays a standalone page; template routes use this layout.
 */

const STYLES = `
    * { box-sizing: border-box; }
    :root {
      --green: #008060;
      --green-dark: #004c3f;
      --text: #202223;
      --muted: #616161;
      --subtle: #8c9196;
      --bg: #f6f6f7;
      --border: #e1e3e5;
      --sidebar: 280px;
    }
    body { margin: 0; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; background: var(--bg); color: var(--text); height: 100dvh; display: flex; flex-direction: column; }
    .topbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 20px; background: #fff; border-bottom: 1px solid var(--border); flex-shrink: 0; }
    .brand { display: flex; flex-direction: column; gap: 2px; text-decoration: none; color: inherit; }
    .brand:hover .brand__title { color: var(--green); }
    .brand__eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--green); }
    .brand__title { font-size: 18px; font-weight: 600; color: var(--text); margin: 0; }
    .topbar__actions { display: flex; gap: 8px; align-items: center; }
    .search { padding: 8px 12px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px; min-width: 200px; }
    .search:focus { outline: none; border-color: var(--green); box-shadow: 0 0 0 1px var(--green); }
    .btn { display: inline-block; padding: 8px 14px; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; text-decoration: none; border-radius: 4px; border: 1px solid var(--border); background: #fff; color: var(--text); cursor: pointer; }
    .btn--primary { background: var(--green); color: #fff; border-color: var(--green); }
    .btn--primary:hover { background: var(--green-dark); border-color: var(--green-dark); }
    .layout { display: flex; flex: 1; min-height: 0; }
    .sidebar { width: var(--sidebar); flex-shrink: 0; background: #fff; border-right: 1px solid var(--border); overflow: auto; padding: 12px 0 24px; }
    .category { margin-bottom: 8px; }
    .category__label { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--subtle); padding: 8px 16px 6px; }
    .nav-item { display: block; width: 100%; text-align: left; padding: 9px 16px; border: 0; background: transparent; font: inherit; font-size: 14px; color: var(--text); cursor: pointer; border-left: 3px solid transparent; text-decoration: none; }
    .nav-item:hover { background: #f1f2f3; }
    .nav-item.is-active { background: #f1f2f3; border-left-color: var(--green); font-weight: 600; }
    .preview { flex: 1; display: flex; flex-direction: column; min-width: 0; background: #eceef0; }
    .preview__meta { padding: 10px 16px; background: #fff; border-bottom: 1px solid var(--border); font-size: 13px; color: var(--muted); display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
    .preview__frame-wrap { flex: 1; padding: 24px; overflow: auto; display: flex; justify-content: center; }
    .preview__frame { width: 100%; max-width: 680px; height: 100%; min-height: 640px; border: 0; background: #fff; box-shadow: 0 8px 32px rgba(32, 34, 35, 0.08); border-radius: 4px; }
    .empty { padding: 48px 24px; text-align: center; color: var(--muted); }
    @media (max-width: 800px) {
      .layout { flex-direction: column; }
      .sidebar { width: 100%; max-height: 40dvh; border-right: 0; border-bottom: 1px solid var(--border); }
      .preview__frame { min-height: 480px; }
    }
`

function categories(items) {
  const map = new Map()
  for (const item of items) {
    if (!map.has(item.category)) map.set(item.category, [])
    map.get(item.category).push(item)
  }
  return map
}

function renderSidebarNav(templates, activeId) {
  const parts = []
  for (const [category, items] of categories(templates)) {
    parts.push(`<div class="category"><div class="category__label">${category}</div>`)
    for (const item of items) {
      const active = item.id === activeId ? ' is-active' : ''
      parts.push(
        `<a class="nav-item${active}" href="/${item.id}" data-id="${item.id}">${item.label}</a>`,
      )
    }
    parts.push('</div>')
  }
  return parts.join('')
}

function buildClientScript(templates, activeId) {
  const data = JSON.stringify(templates)
  return `
    const templates = ${data};
    const sidebar = document.getElementById('sidebar');
    const search = document.getElementById('search');

    function filterNav(filter = '') {
      const q = filter.trim().toLowerCase();
      for (const item of sidebar.querySelectorAll('.nav-item')) {
        const id = item.dataset.id;
        const meta = templates.find(t => t.id === id);
        if (!meta) continue;
        const match = !q
          || meta.label.toLowerCase().includes(q)
          || meta.id.includes(q)
          || meta.category.toLowerCase().includes(q);
        item.style.display = match ? '' : 'none';
      }
      for (const section of sidebar.querySelectorAll('.category')) {
        const visible = [...section.querySelectorAll('.nav-item')].some(el => el.style.display !== 'none');
        section.style.display = visible ? '' : 'none';
      }
    }

    search.addEventListener('input', () => filterNav(search.value));
    filterNav();
  `
}

/**
 * @param {{
 *   templates: { id: string, label: string, category: string }[],
 *   activeId: string,
 *   homeUrl?: string,
 *   previewPathPrefix?: string,
 *   title?: string,
 * }} options
 */
function buildReviewShell({
  templates,
  activeId,
  homeUrl = '/',
  previewPathPrefix = '/preview/',
  title = 'Shopify Blank Email Templates',
}) {
  const active = templates.find((t) => t.id === activeId)
  const previewSrc = `${previewPathPrefix}${activeId}`
  const openHref = previewSrc

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <style>${STYLES}</style>
</head>
<body>
  <header class="topbar">
    <a class="brand" href="${homeUrl}">
      <span class="brand__eyebrow">Local preview</span>
      <h1 class="brand__title">Shopify Blank Email Templates</h1>
    </a>
    <div class="topbar__actions">
      <input class="search" type="search" placeholder="Filter templates…" id="search" aria-label="Filter templates">
      <a class="btn btn--primary" id="open-tab" href="${openHref}" target="_blank" rel="noopener">Open preview</a>
    </div>
  </header>
  <div class="layout">
    <nav class="sidebar" id="sidebar" aria-label="Email templates">${renderSidebarNav(templates, activeId)}</nav>
    <main class="preview">
      <div class="preview__meta">
        <span id="current-label">${active?.label || 'Select a template'}</span>
        <span id="current-path">${active?.id || ''}</span>
      </div>
      <div class="preview__frame-wrap">
        <iframe class="preview__frame" id="frame" title="Email preview" src="${previewSrc}"></iframe>
      </div>
    </main>
  </div>
  <script>${buildClientScript(templates, activeId)}</script>
</body>
</html>`
}

module.exports = { buildReviewShell, STYLES }
