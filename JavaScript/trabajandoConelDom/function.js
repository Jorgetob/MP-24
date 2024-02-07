
// selecciona el botón leer más
let elementoBoton = document.getElementById("leer-mas");

// selecciona el elemento p
let elementoP = document.getElementsByTagName("section");

// selecciona por clase
let elementoClase = document.getElementsByClassName("encabezado");


console.log(elementoBoton);
console.log(elementoP);
console.log(elementoClase);
console.log(elementoClase[0].className)

let elemento =  {
    texto:"Hola",
    longitud:"4",
    numeroVocales:2
}

let secciones =document.querySelectorAll('section');

console.log(secciones);

let secciones1 =document.querySelectorAll('.encabezado');

//Crear un enlace y acceder a la propiedad href del enlace
let enlace = document.createElement("a")

enlace.href = "https://developer.mozilla.org/es/docs/Web/API/Element";
enlace.innerHTML = "Enlace al documento"

console.log(enlace);

//Crear un parrafo de texto

let parrafoNuevo = document.createElement("p");

let nodoTexto = document.createTextNode("Hola buenos días")

parrafoNuevo.appendChild(nodoTexto);
console.log(parrafoNuevo);

let seccionDescripcion = document.querySelector(".descripcion")

seccionDescripcion.appendChild(parrafoNuevo);

seccionDescripcion.appendChild(enlace);

//encontrar el enlace de la imagen del ArcGIS Pro y cambiarlo a arcgis online

let imagen = document.querySelector("img");

console.log(imagen.getAttributeNames());

console.log(imagen.getAttribute( "src"));

imagen.setAttribute("src","https://www.esri.es/content/dam/esrisites/en-us/common/icons/product-logos/ArcGISOnline.png")

//Modo oscuro del encabezado 
let elementoClase1 = document.getElementsByClassName("encabezado");

let encabezado = elementoClase[0];
console.log(encabezado.classList)

encabezado.classList.add("oscuro");

console.log(encabezado.classList)
encabezado.classList.remove("oscuro")