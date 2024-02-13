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
