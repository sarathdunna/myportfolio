document.addEventListener('DOMContentLoaded', () => {
  // AOS
  AOS.init({ duration: 900, once: true });

  // Footer Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Preloader
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 500);
  });

  // Theme Toggle
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') body.classList.add('light-mode');

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
  });

  // Typing Effect
  const typing = document.querySelector('.typing');
  const text = ['Sarathkumar Dunnapapagari', 'a Developer', 'a Cloud Enthusiast'];
  let i = 0, j = 0, deleting = false;

  function type() {
    const current = text[i];
    typing.textContent = deleting ? current.slice(0, --j) : current.slice(0, ++j);
    if (!deleting && j === current.length) {
      deleting = true;
      setTimeout(type, 1200);
    } else if (deleting && j === 0) {
      deleting = false;
      i = (i + 1) % text.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, deleting ? 60 : 90);
    }
  }
  type();

  // Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('primaryNav');
  menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
  });

  // Scroll To Top
  const topBtn = document.getElementById('topBtn');
  window.onscroll = () => {
    topBtn.style.display = (document.documentElement.scrollTop > 300) ? 'block' : 'none';
  };
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
});
