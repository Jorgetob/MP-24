let animalFavoritoDeseado = 'guepardo';


if (animalFavoritoUsuario === animalFavoritoDeseado) {
    mensajeElemento.innerHTML = '¡Correcto!';
    mensajeElemento.className = 'verde';
} else {
    mensajeElemento.innerHTML = 'Incorrecto. Inténtalo de nuevo.';
    mensajeElemento.className = 'rojo';
            }