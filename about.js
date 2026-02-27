/* ================================================================
   ABOUT PAGE — GALLERY FILTER JS
================================================================ */

(function() {
  const filterTabs  = document.querySelectorAll('.filter-tab');
  const mediaTabs   = document.querySelectorAll('.media-tab');
  const galleryItems = document.querySelectorAll('.gallery-item');

  let currentFilter = 'all';
  let currentType   = 'photo';

  function applyFilter() {
    galleryItems.forEach(item => {
      const matchFilter = currentFilter === 'all' || item.classList.contains(currentFilter);
      const matchType   = item.classList.contains(currentType);

      if (matchFilter && matchType) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  /* Filter tabs */
  filterTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      filterTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilter();
    });
  });

  /* Media tabs */
  mediaTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      mediaTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentType = btn.dataset.type;
      applyFilter();
    });
  });

  /* Initial state */
  applyFilter();
})();
