document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');

  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 50);
  });

  toggle?.addEventListener('click', () => {
    links?.classList.toggle('open');
  });

  links?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  reveals.forEach(el => observer.observe(el));
});
