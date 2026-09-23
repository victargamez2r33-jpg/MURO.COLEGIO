// ==========================================================================
// INSTITUTO JOSÉ CECILIO DEL VALLE — SCRIPT COMPARTIDO
// Menú móvil, lightbox de imágenes y botón "volver arriba".
// Cárgalo con <script src="script.js" defer></script> en cada página.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Menú móvil ---
    const navToggle = document.getElementById('navToggle');
    const navPrincipal = document.getElementById('navPrincipal');
    if (navToggle && navPrincipal) {
        navToggle.addEventListener('click', () => {
            navPrincipal.classList.toggle('abierto');
            const abierto = navPrincipal.classList.contains('abierto');
            navToggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        });
    }

    // --- Botón "volver arriba" ---
    const btnArriba = document.getElementById('btnArriba');
    if (btnArriba) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                btnArriba.classList.add('visible');
            } else {
                btnArriba.classList.remove('visible');
            }
        });
        btnArriba.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// --- Lightbox de imágenes (llamado con onclick="abrirLightbox(this.src)") ---
function abrirLightbox(src) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('imagenAmpliada');
    if (!modal || !img) return;
    img.src = src;
    modal.style.display = 'flex';
}

function cerrarLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) modal.style.display = 'none';
}

// Cerrar el lightbox con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarLightbox();
});
