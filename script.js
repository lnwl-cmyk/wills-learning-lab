// Apply the theme before the page renders; initialize controls when the DOM is ready.
(() => {
  const key = 'wills-learning-lab-theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch { /* Storage may be blocked; the toggle still works. */ }
  let toggle;
  function applyTheme() {
    const theme = preference || (system.matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    if (toggle) toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }
  applyTheme();
  system.addEventListener('change', applyTheme);
  document.addEventListener('DOMContentLoaded', () => {
    toggle = document.querySelector('#theme-toggle');
    if (!toggle) return;
    applyTheme();
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, preference); } catch { /* In-memory fallback. */ }
      applyTheme();
    });
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  // The shared script does nothing on pages without a resource filter.
  const filter = document.querySelector('#category');
  if (filter) {
    const resources = document.querySelectorAll('.resource');
    const count = document.querySelector('#result-count');
    function updateResources() {
      let visible = 0;
      resources.forEach(resource => {
        const matches = filter.value === 'all' || resource.dataset.category === filter.value;
        resource.hidden = !matches;
        if (matches) visible += 1;
      });
      count.textContent = `${visible} of ${resources.length} resources shown`;
    }
    filter.addEventListener('change', updateResources);
    updateResources();
    document.querySelector('#filter-controls').hidden = false;
  }
  
});
