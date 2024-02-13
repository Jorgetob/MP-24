//Pregunta clima
function verificarRespuesta1(respuesta1){
    const respuestaCorrecta1 = '-26ºC';

    if (respuesta1 ===  respuestaCorrecta1) {
        document.getElementById('resultado1').innerHTML =  '¡Correcto! La temperatura más baja registrada en Oslo es de -26°C.';
    }else{
        document.getElementById('resultado1').innerHTML = "Respuesta incorrecta. Intentalo de nuevo";
    }
}

// Pregunta exportar
function verificarRespuesta(respuesta){
    const respuestaCorrecta = 'salmon';

    if (respuesta === respuestaCorrecta) {
        document.getElementById('resultado').innerHTML = '¡Correcto! El salmón es el producto que más exporta Noruega.';
    } else {
        document.getElementById('resultado').innerHTML = 'Respuesta incorrecta. Intenta de nuevo.';
    }
}

//Valoración con estrellas
document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.getElementById('stars');
    
    starsContainer.addEventListener('click', function (e) {
        const selectedStar = e.target;
        if (selectedStar.classList.contains('star')) {
            const value = selectedStar.getAttribute('data-value');
            updateRating(value);
        }
    });

    starsContainer.addEventListener('mouseover', function (e) {
        const hoveredStar = e.target;
        if (hoveredStar.classList.contains('star')) {
            const value = hoveredStar.getAttribute('data-value');
            highlightStars(value);
        }
    });

    function highlightStars(value) {
        const stars = document.querySelectorAll('.star');
        stars.forEach(function (star) {
            star.classList.remove('active');
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('active');
            }
        });
    }
});