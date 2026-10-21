document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const setIcon = () => {
    themeToggle.innerHTML = root.dataset.theme === 'light'
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
  };
  setIcon();
  themeToggle.addEventListener('click', () => {
    if (root.dataset.theme === 'light') delete root.dataset.theme;
    else root.dataset.theme = 'light';
    try { localStorage.setItem('theme', root.dataset.theme === 'light' ? 'light' : 'dark'); } catch (e) {}
    setIcon();
  });

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
    menuToggle.innerHTML = open ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }));

  // Rotating role text
  const rotator = document.getElementById('rotator');
  const roles = ['Cloud Engineer', 'DevOps Engineer', 'Python Developer', 'Java Developer'];
  let r = 0;
  setInterval(() => {
    rotator.classList.add('out');
    setTimeout(() => {
      r = (r + 1) % roles.length;
      rotator.textContent = roles[r];
      rotator.classList.remove('out');
    }, 300);
  }, 2600);

  // Reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    io.observe(el);
  });

  // Active nav link
  const links = [...navLinks.querySelectorAll('a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href')));
  const navIo = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => s && navIo.observe(s));

  // Copy email
  const copyBtn = document.getElementById('copyEmail');
  copyBtn.addEventListener('click', async () => {
    const label = copyBtn.querySelector('span');
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.email);
      label.textContent = 'Copied!';
    } catch (e) {
      label.textContent = copyBtn.dataset.email;
    }
    setTimeout(() => { label.textContent = 'Copy email'; }, 2000);
  });
});
