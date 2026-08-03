document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Gallery lightbox
  var thumbs = document.querySelectorAll('.gallery-grid button');
  var lightbox = document.querySelector('.lightbox');
  if (thumbs.length && lightbox) {
    var lbImg = lightbox.querySelector('img');
    var current = 0;

    function show(index) {
      current = (index + thumbs.length) % thumbs.length;
      var full = thumbs[current].getAttribute('data-full');
      var caption = thumbs[current].getAttribute('data-caption') || '';
      lbImg.src = full;
      lbImg.alt = caption;
      lightbox.classList.add('open');
    }

    thumbs.forEach(function (btn, i) {
      btn.addEventListener('click', function () { show(i); });
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', function () {
      lightbox.classList.remove('open');
    });
    lightbox.querySelector('.lightbox-prev').addEventListener('click', function () { show(current - 1); });
    lightbox.querySelector('.lightbox-next').addEventListener('click', function () { show(current + 1); });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lightbox.classList.remove('open');
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') lightbox.classList.remove('open');
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
  }
});
