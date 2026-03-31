function filterSchedule() {
    const selectedStyle = document.getElementById('style-filter').value;
    const slots = document.querySelectorAll('.class-slot');

    slots.forEach(slot => {
        const matchesStyle = selectedStyle === 'all' || slot.getAttribute('data-style') === selectedStyle;
        
        if (matchesStyle) {
            slot.style.opacity = "1";
            slot.style.visibility = "visible";
        } else {
            // En horarios es mejor bajar la opacidad que ocultar para no deformar la tabla
            slot.style.opacity = "0.1";
        }
    });
}