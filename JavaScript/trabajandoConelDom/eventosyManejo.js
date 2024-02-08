let animalUsuario = prompt();
let animalFavorito = 'jirafa';


if (animalUsuario === animalFavorito) {
    mensajeElemento.innerHTML = '¡Correcto!';
    mensajeElemento.className = 'verde';
} else {
    mensajeElemento.innerHTML = 'Incorrecto';
    mensajeElemento.className = 'rojo';
            }

