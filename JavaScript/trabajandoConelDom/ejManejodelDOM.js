 // Número de enlaces en la página
    let enlaces = document.getElementsByTagName("a");
    console.log('Número de enlaces', enlaces.length);

// Dirección a la que enlaza el penúltimo enlace

    let enlace = document.getElementsByTagName('Dirección del penúltimo enlace:');
    enlace.href = "https://geonet.esri.com/welcome";
    enlace.innerHTML = 'Dirección del penúltimo enlace:'
    console.log(enlace);

// Número de enlaces en el tercer párrafo
    let tercerParrafo = document.getElementById('thirdparagraph');
    let enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a');
    console.log('Número de enlaces en el tercer párrafo:', enlacesTercerParrafo.length)

//Pinta los resultados al final de la página utilizando innerHTML y crando un nodo
let nuevoParrafo = document.createElement("p")
let bosy = document.getElementsByTagName("body")
console.log(body)
