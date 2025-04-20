const swatches = document.querySelectorAll('.theme-swatch');
const toggleBtn = document.querySelector('.theme-toggle');
let hidden = false;

// Bấm vào swatch nào thì đổi theme
swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    const theme = swatch.dataset.theme;
    document.documentElement.className = '';
    document.documentElement.classList.add(theme);
  });
});

// Ẩn/hiện các swatch có hiệu ứng
toggleBtn.addEventListener('click', () => {
  hidden = !hidden;
  swatches.forEach(swatch => {
    swatch.classList.toggle('hide', hidden);
  });
  
  // Thay đổi icon khi nhấn vào toggle
  const icon = toggleBtn.querySelector('i');
  icon.classList.toggle('bx-chevron-left', hidden);
  icon.classList.toggle('bx-chevron-right', !hidden);
});