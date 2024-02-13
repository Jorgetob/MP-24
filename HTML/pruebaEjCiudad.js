// Parte del JavaScript
function verificarRespuesta(respuesta) {
    const respuestaCorrecta = 'salmon';

    if (respuesta === respuestaCorrecta) {
        document.getElementById('resultado').innerHTML = '¡Correcto! El salmón es el producto que más exporta Noruega.';
    } else {
        document.getElementById('resultado').innerHTML = 'Respuesta incorrecta. Intenta de nuevo.';
    }
}