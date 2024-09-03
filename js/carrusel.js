let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel .slide');
    const totalSlides = slides.length;

    // Asegura que el índice esté dentro de los límites
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    // Mueve el carrusel a la diapositiva seleccionada
    const offset = -slideIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(slideIndex + direction);
}

// Inicializa el carrusel
showSlide(slideIndex);
