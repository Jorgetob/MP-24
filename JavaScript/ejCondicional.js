//Año Bisiesto

function esBisiesto(año) {
    return (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0));
}

// Ejemplo año:
const añoEjemplo = 1992;
if (esBisiesto(añoEjemplo)) {
    console.log(`${añoEjemplo} es un año bisiesto.`);
} else {
    console.log(`${añoEjemplo} no es un año bisiesto.`);
}


//Otro ejemplo bisiesto

let nuemro = 2004

if(numero % 4!==0){
    console.log('No es bisiesto:(')
} else if (numero % 100!==0){
    console.log('Es bisiesto')
} else if (numero % 400===0){
    console.log('Es bisiesto, pero también lo fue en el siglo pasado')
} else {
    console.log('No es bisiesto:(')
}


//Número más cercano a 100

let num1 = 56;
let num2 = 87;

let unoACien = 100-num1
let dosACien = 100-num2

if(unoACien > dosACien){
    console.log(`${num2} está más cerca de 100`)
}else{
    console.log(`${num1} está más cerca de 100`)
    console.log(unoACien)
}
