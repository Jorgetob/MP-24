//Ole esa T
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

for (let letra of letrasDNI){
    
    console.log(letra)
     
    if(letra === 'D'){
        break         //parar la iteracion
    }
}
//Posicion de la letra d
for(let posicion in letrasDNI){
    if(letrasDNI[posicion]==='D'){
    console.log(posicion)
    }   
}

//Funciones

//Suma funciones
let numeroUno = 15
let numeroDos = 16

console.log(numeroUno + numeroDos)

function sumarDosNumeros (numeUno,numeDos){
    let suma = numeUno + numeDos
    return suma
}

sumarDosNumeros (12,25)
sumarDosNumeros (27,45)

let resultadoFuncion = sumarDosNumeros(48,80)
//funcion dos

function holaBuenosDias(){
    console.log('Hola Buenos Dias')
}

holaBuenosDias()
holaBuenosDias()
holaBuenosDias()
holaBuenosDias()
holaBuenosDias()
holaBuenosDias()

letrasDNI.push('Q')

let palabra = 'Jorge'
palabra = palabra.toUpperCase
console.log(palabra)