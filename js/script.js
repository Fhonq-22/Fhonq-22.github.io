function viewport() {
  var st = window.scrollY || document.documentElement.scrollTop;
  var wh = window.innerHeight;
  var nav = document.querySelector('nav');
  var reference = document.querySelector('.reference');
  var scrollableHeight = document.documentElement.scrollHeight - wh;

  if (nav && reference && scrollableHeight > 0) {
    var dif = nav.offsetHeight / scrollableHeight;

    reference.style.height = (wh * dif) + 'px';
    reference.style.top = (st * dif) + 'px';
  }
}
['load', 'resize', 'scroll'].forEach(event => window.addEventListener(event, viewport));

// Smooth scroll for anchor links
document.addEventListener('click', function (event) {
  if (event.target.matches('a[href^="#"]')) {
    event.preventDefault();
    var targetId = event.target.getAttribute('href');
    var targetElement = document.querySelector(targetId);

    if (targetElement) {
      var targetPosition = targetElement.offsetTop;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var duration = 500;
      var startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // Easing function
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  }
});

function updateMenuHeights() {
  var nav = document.querySelector('nav');
  // var menuItems = nav.querySelectorAll('ol > li');
  var menuItems = document.querySelectorAll('nav > ol > li');
  var totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  var navHeight = nav.offsetHeight;

  menuItems.forEach(function (li) {
    var link = li.querySelector('a[href^="#"]');
    var barHeight = 0;

    if (link) {
      var sectionId = link.getAttribute('href');
      var section = document.querySelector(sectionId);
      if (section) {
        var sectionHeight = section.offsetHeight;
        var heightRatio = sectionHeight / totalScrollableHeight;
        barHeight = heightRatio * navHeight;
        li.style.setProperty('--bar-height', barHeight + 'px');

        var a = li.querySelector(':scope > a[href^="#"]');
        a.style.height = barHeight + "px";
      }

    }

    var submenu = li.querySelector('.sub-menu');
    if (submenu) {
      submenu.style.marginTop = -3 + 'px';
    }
  });

}
setTimeout(() => {
  updateMenuHeights();
}, 1500);

window.addEventListener('resize', updateMenuHeights);

const swatches = document.querySelectorAll('.theme-swatch');
swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    const theme = swatch.dataset.theme;
    document.documentElement.className = '';
    document.documentElement.classList.add(theme);
  });
});