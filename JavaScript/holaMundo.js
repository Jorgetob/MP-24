//Voy a poner una alerta

alert('Hola Mundo')

//Primera variable
let calleMaster = 'Doctor Castelo'
const velocidadluz = 123456

//Ejercicio utilzando variables volumen

console.log(calleMaster)

//Dimensiones del cubo
var ancho = 23; // en centímetros
var alto = 13;  // en centímetros
var profundidad = 16; // en centímetros

//Calculo del volumen 
console.log (ancho * alto * profundidad)

//Arrays Ejercicio hobbies

//Array de hobbies con sus posiciones
var hobbies = ["Dormir", "Senderismo", "Musica", "Viajar", "Tapeo"];

//Posición segunda
console.log(hobbies[1])

// Añadir un nuevo hobby al final del array
hobbies.push("Natación");


let nombreEquipo = 'Rayo Vallecano'

let frase = `Mi equipo favorito es: ${ nombreEquipo}`

let frase2 = 'Mi equipo favorito es: '+ nombreEquipo

console.log(frase)
console.log(frase2)

console.log('5'==5)
console.log()


//Condicionales
if(ancho ===22){
    console.log ("Es verdad que el ancho es igual a 23")
}else if (alto > 14){
    console.log ("El alto es mayor que 14")
}else{
    console.log('No es ni una ni la otra')
}



//Ejercicio Condicionales 

let numero1 =12;
let numero2 =10;

//Si el primer numero es mayor que el segundo: sumas los numeros y los enseñas por consola
    if (numero1 > numero2) {
        let suma = numero1 + numero2;
        console.log("El primer número es mayor. La suma es: " + suma);
    } else {
     console.log("El primer número no es mayor que el segundo.");
    }

// Comprobar si el primer número es mayor que el segundo
    if (numero1 > numero2) {

        // Sumar los números
    let suma = numero1 + numero2;

// Mostrar el resultado 
    console.log("El primer número es mayor. La suma es: " + suma);
    } else {
    
// Comprobar si el segundo número es negativo o distinto de cero
    if (numero2 < 0 || numero2 !== 0) {

// Multiplicar el segundo número por 3
        let multiplicacion = numero2 * 3;

// Mostrar el resultado en la consola
        console.log("El segundo número es negativo o distinto de cero. El resultado de la multiplicación por 3 es: " + multiplicacion);
    } else {

// En caso contrario, mostrar un mensaje
        console.log("El segundo número no es negativo ni distinto de cero.");
    }
    }

 // Incrementar el valor del primer número en 1 unidad
     numero1++;

 // Comprobar si después del incremento, el primer número es mayor o igual que el segundo
    if (numero1 >= numero2) {
        console.log("Después de incrementar en 1 unidad, el primer número ahora es igual o mayor que el segundo.");
    } else {

// Calcular cuánto se debe sumar al valor de numero1 para que sea igual que numero2
     let diferencia = numero2 - numero1;


 // Mostrar el resultado en la consola
     console.log("Incrementa " + diferencia + " unidades al primer número para que sea igual que el segundo.");
    }
