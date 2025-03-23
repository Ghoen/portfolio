// Navbar

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

// Modal

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-container");
    const modalImg = document.getElementById("modal-image");
    const closeModal = document.querySelector(".close");
    
    document.querySelectorAll(".open-modal-btn").forEach(button => {
        button.addEventListener("click", function() {
        const imgSrc = this.getAttribute("data-image");
        modalImg.src = imgSrc;
        modal.style.display = "flex";
    });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
        modal.style.display = "none";
        }
    });
});

// Language switcher

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("cb3-8");

    // Detectar la página actual
    const isSpanish = window.location.pathname.includes("index_es");

    // Marcar el checkbox si estamos en español
    toggle.checked = !isSpanish;

    // Redirigir cuando cambia el checkbox
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            window.location.href = "index.html"; // Página en inglés
        } else {
            window.location.href = "index_es.html"; // Página en español
        }
    });
});
