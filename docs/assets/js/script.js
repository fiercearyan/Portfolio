// Copy-email button (contact section)
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('copy-email');
  if (!btn) return;
  var email = 'aryankrsingh7@gmail.com';
  var original = btn.textContent;
  var timer = null;

  btn.addEventListener('click', function () {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(function () {});
    }
    btn.textContent = '✓ Copied ' + email;
    clearTimeout(timer);
    timer = setTimeout(function () {
      btn.textContent = original;
    }, 2000);
  });
});

// Subtle fade-up reveal on scroll
document.addEventListener('DOMContentLoaded', function () {
  if (!('IntersectionObserver' in window)) return;
  var targets = document.querySelectorAll('.section, .hero');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.6s ease both';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach(function (t) { observer.observe(t); });
});
