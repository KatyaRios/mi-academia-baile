const toggleTheme = () => {
    const html = document.documentElement;
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    
    // Cambiar el tema
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Cambiar los íconos (si existen en la página)
    if (moonIcon && sunIcon) {
        moonIcon.style.display = newTheme === 'dark' ? 'none' : 'block';
        sunIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
    }
};

// Aplicar el tema guardado apenas cargue la página
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    if (moonIcon && sunIcon) {
        moonIcon.style.display = savedTheme === 'dark' ? 'none' : 'block';
        sunIcon.style.display = savedTheme === 'dark' ? 'block' : 'none';
    }
};

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', initTheme);

// Hacer la función accesible para el onclick del HTML
window.toggleTheme = toggleTheme;

function filterClasses() {
    const nameSearch = document.getElementById('name-search').value.toLowerCase();
    const styleFilter = document.getElementById('style-filter').value;
    const typeFilter = document.getElementById('type-filter').value;
    const levelFilter = document.getElementById('level-filter').value;

    const classCards = document.querySelectorAll('.class-card');

    classCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        const style = card.getAttribute('data-style');
        const type = card.getAttribute('data-type');
        const level = card.getAttribute('data-level');

        const matchesName = name.includes(nameSearch);
        const matchesStyle = !styleFilter || style === styleFilter;
        const matchesType = !typeFilter || type === typeFilter;
        const matchesLevel = !levelFilter || level === levelFilter;

        if (matchesName && matchesStyle && matchesType && matchesLevel) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add event listeners to filters
document.addEventListener('DOMContentLoaded', function() {
    const nameSearch = document.getElementById('name-search');
    const styleFilter = document.getElementById('style-filter');
    const typeFilter = document.getElementById('type-filter');
    const levelFilter = document.getElementById('level-filter');

    if (nameSearch) nameSearch.addEventListener('input', filterClasses);
    if (styleFilter) styleFilter.addEventListener('change', filterClasses);
    if (typeFilter) typeFilter.addEventListener('change', filterClasses);
    if (levelFilter) levelFilter.addEventListener('change', filterClasses);
});

console.log("XIRA DANCE STUDIO - Script unificado y cargado.");
