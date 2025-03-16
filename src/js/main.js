document.addEventListener('DOMContentLoaded', function() {
    const navWrapper = document.getElementById('nav-wrapper'); // Cambio a `nav-wrapper`
    const welcomeSection = document.getElementById('welcome-section');

    if (!navWrapper || !welcomeSection) {
        console.error("Error: #nav-wrapper o #welcome-section no encontrado en el DOM.");
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            navWrapper.classList.toggle('visible', !entry.isIntersecting);
        });
    }, { threshold: 0.75 });

    observer.observe(welcomeSection);
});