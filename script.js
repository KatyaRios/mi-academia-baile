

// Active navigation logic
function updateActiveNav() {
  const links = document.querySelectorAll('.nav-links a[href]');
  const currentPath = window.location.pathname.replace(/\.html$/, '').replace(/^\//, '');
  
  links.forEach(link => {
    link.classList.remove('active');
    const linkPath = link.getAttribute('href').replace(/\.html$/, '').replace(/^\//, '');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index')) {
      link.classList.add('active');
    }
  });
}

function initNav() {
  const navLinks = document.querySelectorAll('.nav-links a[href]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// DOMContentLoaded - Solo navegación activa
document.addEventListener('DOMContentLoaded', () => {
  updateActiveNav();
  initNav();
});

console.log("XIRA - Core (Nav) cargado.");
