
const nombres = ['Miguel', 'Javier', 'Maria', 'Juan', 'Guille', 'Miguel Angel']

//Bucle
for(let nombre of nombres){
    console.log(nombre)
}

//Método funcional de tipos de dato array

function enMayusculas(palabra){
    
}

let nuevoArray = nombres.map(function enMayusculas(palabra){
palabra = palabra.toUpperCase()
    return palabra
})
console.log(nuevoArray);

//Ej: sin primera letra, crea una función que concatene dos cadenas excepto su primer carácter

const palabra1 = "perro";
const palabra2 = "canguro";

function  concatenarExceptoPrimeraLetra(palabra1, palabra2){
    if (palabra1.length > 0 && palabra2.length > 0) {
        const resultado = palabra1.slice(1) + palabra2.slice(1);
        return resultado;
      } else {
        return "Ambas cadenas deben tener al menos un carácter.";
      }
    }
 console.log(concatenarExceptoPrimeraLetra(palabra1, palabra2));

 //Crea una funcion que invierta una palabra dada (chocolate)

 let palabra3 = "chocolate";
 
 function invertirPalabra(palabra){
    return palabra.split("").reverse().join("");
}
  let palabraInvertida = invertirPalabra("chocolate");
  console.log(palabraInvertida); 

//Otro ejemplo
function invertirPalabra(palabra){
    let letras = palabra.split('')
    let invertidasLetras = letras.reverse();
    let invertida = invertidasLetras.join('')
    return invertida;
}

console.log(invertirPalabra('Alistate en la Marina'))

//Ej: Crea una función que acepte una palabra y calcule su número de vocales, con un buqle 

let palab = "horchata"

function  contarVocales(palabra){
    let vocal = 'aeiou';
    let contador= 0;
    for (let i=0; i<palabra.length; i++){
       if (vocal.indexOf(palabra[i].toLowerCase())!==-1 )
          contador++;
    }
   return contador;
}
console.log(contarVocales(palab))

i