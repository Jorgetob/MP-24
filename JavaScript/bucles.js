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
