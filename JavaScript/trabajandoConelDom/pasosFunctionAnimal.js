//Selecciono el boton

const boton = document.getElementById("button");

//Creo un evento sobre el boton

boton.addEventListener('click', botonHandler);

//Creo la funcion del evento 

function botonHandler(){

//Selecionar el input

const input = document.getElementById("animalFavorito")

//Acceder a la propiedad que almacena el texto

let textoInput = input.value

//Pintarlo por consola
console.log(textoInput);

//Defino mi animal favorito

const animalFavorito = "jirafa"
//evluar si existe parrafo ya
if(document.body.children.length === 4){
    document.body.lastChild.remove();
}


//Evaluar si me animal favorito es igual que el de texto almacenado del input

if (animalFavorito === textoInput){
    //Mensaje correcto
    //crear elemento p e intertar texto 
    let parrafo = document.createElement("p");
    parrafo.innerHTML =  "Mi animal fav es una jirafa"
    document.body.appendChild(parrafo)
    
    }else{
        //Mostramos mensaje incorrecto
        let parrafo = document.createElement("p");
        parrafo.innerHTML =  "Tu animal fav no  es una jirafa"
        document.body.appendChild(parrafo)
    }

}