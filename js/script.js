function viewport() {
  var st = window.scrollY || document.documentElement.scrollTop;
  var wh = window.innerHeight;
  var nav = document.querySelector('nav');
  var docHeight = document.documentElement.scrollHeight;
  var reference = document.querySelector('.reference');
  
  if (nav && reference) {
    var dif = nav.offsetHeight / docHeight;
    
    reference.style.height = (wh * dif) + 'px';
    reference.style.top = (st * dif) + 'px';
  }
}

// Initial call
viewport();

// Resize event
window.addEventListener('resize', viewport);

// Scroll event
window.addEventListener('scroll', viewport);

// Smooth scroll for anchor links
document.addEventListener('click', function(event) {
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
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
      }
      
      requestAnimationFrame(animation);
    }
  }
});