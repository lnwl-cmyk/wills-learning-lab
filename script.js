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
