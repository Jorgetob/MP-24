
class Puerta{
    
    //propiedades de nuestras puertas
    color;
    numero_visagras;
    tipo_mango;
    altura;
    estado ="Cerrada";
    
    //
    constructor(colorProp,numero_visagrasProp,tipo_magoProp,alturaProp){
        this.color = colorProp;
        this.numero_visagras = numero_visagrasProp;
        this.tipo_mango=tipo_magoProp;
        this.altura=alturaProp;
    }
    abrirPuerta(){
        this.estado = "Abierta"
    }
}

let puerta1 = new Puerta('Azul',3,'Normal',2)

console.log(puerta1)

puerta1.abrirPuerta()

console.log(puerta1)

class nevera{
    
    //propiedades de nuestras neveras
    color;
    numero_puertas;
    tipo_mango;
    altura;
    estado ="Cerrada";
    
    //
    constructor(colorProp,numero_puertasProp,tipo_mangoProp,alturaProp){
        this.color = colorProp;
        this.numero_puertas = numero_puertasProp;
        this.tipo_mango=tipo_mangoProp;
        this.altura=alturaProp;
    }
    abrirnevera(){
        this.estado = "Abierta"
    }
}

let nevera1 = new nevera('negra',2,'Vertical',2)

console.log(nevera1)

nevera1.abrirnevera()

console.log(nevera1)