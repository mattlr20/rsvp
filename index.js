const preloader = document.querySelector('.preload');

window.addEventListener('load', function () {
  preloader.classList.add('visible');
});

document.getElementById('btnRSVP').addEventListener('click', function () {
  document.getElementById('home').className = 'fadeout';
  setTimeout(function () {
    document.getElementById('rsvp-form').className = 'fadein';
  }, 1000);
});