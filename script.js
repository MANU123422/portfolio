document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.nav a');

  const setActiveLink = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  };

  const observer = new IntersectionObserver(setActiveLink, { rootMargin: '-30% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));
});
