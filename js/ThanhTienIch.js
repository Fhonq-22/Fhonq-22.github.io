const swatches = document.querySelectorAll('.theme-swatch');
const toggleBtn = document.querySelector('.theme-toggle');
const extraButtons = document.querySelectorAll('.extra-button');
let hidden = false;

swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    const theme = swatch.dataset.theme;
    document.documentElement.className = '';
    document.documentElement.classList.add(theme);
  });
});

toggleBtn.addEventListener('click', () => {
  hidden = !hidden;

  swatches.forEach(swatch => {
    swatch.classList.toggle('hide', hidden);
  });

  const icon = toggleBtn.querySelector('i');
  icon.classList.toggle('bx-chevron-left', hidden);
  icon.classList.toggle('bx-chevron-right', !hidden);

  extraButtons.forEach(btn => {
    if (!btn.classList.contains('theme-toggle')) {
      btn.classList.remove('show', 'hide');
      void btn.offsetWidth; // reset animation
      if (!hidden) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }
  });
});