//Añadiendo eventos

const botonVerMas = document.getElementById("leer-mas");

console.log(botonVerMas);

botonVerMas.addEventListener("click",buttonHandler)

function buttonHandler(evento){

    let parrafoVacio = document.createElement("p")

    let texto = document.createTextNode("Aqui va el texto de ver mas")

    parrafoVacio.appendChild(texto)

    let seccionDescripcion = document.getElementsByClassName("descripcion")

    console.log(seccionDescripcion)

    seccionDescripcion [0].appendChild(parrafoVacio)

    console.log(evento)

}

botonVerMas.addEventListener("dblclick",doubleClickHandler)

function doubleClickHandler(){

    console.log("he hecho doble click")
}


