//Bucles

for(let i =0; i < 3; i ++){
    console.log(`Esto es un bucle for ${i}`)
}

//días de la semana
const semana = ['Lunes', 'Martes','Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

for(let dia of semana){
    
    //que el sabado acabe la sem laboral
   if(dia === 'Sábado'){
    break
   }
   console.log(dia)
}

for (let dia in semana){
    console.log(dia)
}

//Ejercicio palabra mas larga

const semana1 = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];


let palabraMasLargaOf = semana[0];

for(let dia of semana){
    if(dia.length > palabraMasLargaOf.length){
        palabraMasLargaOf = dia
    }
}
console.log('palabraMasLarga')
   
//Factorial, de un número dado

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const numero = 4;
const resultado = factorial(numero);

console.log(`El factorial de ${numero} es: ${resultado}`);


//caja vacia

let declaracionVacia;

console.log(declaracionVacia)

declaracionVacia ='declaraciónLlena'

console.log(declaracionVacia)

//esto es una objeto: cumpleaños

let cumpleanos = {
    dia: 6,
    mes:'Octubre'
}

console.log(`El dia de mi cumpleaños es el ${cumpleanos.dia} de ${cumpleanos.mes}.`)

console.log('El dia de mi cumpleños es' + cumpleanos.dia + 'de' + cumpleanos.mes)

//array cumpleaños

let arrayCumpleanos = ['24 Junio', '4 Noviembre', '1 Mayo']
console.log (arrayCumpleanos)

//posición 2
arrayCumpleanos[1]

console.log(arrayCumpleanos[1])

//concicional cumpleaños 

if(cumpleanos.dia === 2 && cumpleanos.mes === 'Diciembre'){
    console.log(`El dia de mi cumpleaños es el ${cumpleanos.dia} de ${cumpleanos.mes}.`)
}

//ej

let numerUno = 13
let numerDos = 14

if(numerUno > numerDos){
    let suma = numerUno + numerDos
    console.log(suma)
}else{
    let resta = numerDos - numerUno
    console.log(resta)
}

//Letra del DNI 

let arrayletras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

let numDNI = prompt()
let letraDNI = ['X']

if(numDNI > 0 && numDNI <99999999){
    let resto = numDNI % 23
    let letraDNI = arrayletras[resto]
    console.log(letraDNI)
}else{
    alert('El núero que has introducido no vale tiene que estar entre 0  y 99999999')
}


let posicionInicial = 0 

for(posicionInicial;posicionInicial < 5;posicionInicial++){
    console.log(posicionInicial)
}

