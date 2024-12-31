let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Прокрутка вниз
    navbar.style.backgroundColor = 'rgba(43, 43, 43, 0.8)'; // Прозрачный фон
  } else {
    // Прокрутка вверх
    navbar.style.backgroundColor = 'rgba(43, 43, 43, 1)'; // Непрозрачный фон
  }
  lastScrollTop = scrollTop;
});