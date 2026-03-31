// --- LÓGICA DE FILTRADO DE CLASES ---
function filterClasses() {
    const nameSearch = document.getElementById('name-search').value.toLowerCase();
    const styleFilter = document.getElementById('style-filter').value;
    const typeFilter = document.getElementById('type-filter').value;
    const levelFilter = document.getElementById('level-filter').value;

    const classCards = document.querySelectorAll('.class-card');
    let anyVisible = false;

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
            anyVisible = true; 
        } else {
            card.style.display = 'none';
        }
    });

    // Ocultar secciones vacías
    const sections = document.querySelectorAll('.level-section');
    sections.forEach(section => {
        const cardsInSection = section.querySelectorAll('.class-card');
        let hasVisible = false;
        cardsInSection.forEach(card => {
            if (card.style.display !== 'none') hasVisible = true;
        });
        section.style.display = hasVisible ? 'block' : 'none';
    });

    const noClassesMessage = document.getElementById('no-classes-message');
    if (noClassesMessage) {
        noClassesMessage.style.display = anyVisible ? 'none' : 'block';
    }
}

// Escuchadores de eventos para filtros
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

console.log("XIRA - Catálogo de Clases cargado.");