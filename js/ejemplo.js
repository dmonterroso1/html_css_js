var a = 10;
var b = a;
console.log("a: ", a);
console.log("b: ", b);

a = 20;
console.log("a: ", a);
console.log("b; ", b);


var c = {
    nombre: "Juan"
}
var d = c; //Valor por refencia, ambas variables apuntan a la misma direccion en memoria
console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Pedro";
console.log("c: ", c);
console.log("d: ", d);


//---NOTACION PUNTO Y CORCHETES
var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San Jose"
    }
};
console.log(persona.nombre);
console.log(persona.direccion.ciudad);


//---FUNCIONES
var a = 40;
function primeraFuncion(){
    console.log(a);
}
primeraFuncion(); //Imprime el valor de a

function imprimir(nombre){
    console.log(nombre);
}
imprimir("Daniel");

var miFuncion = function(){
    console.log("miFuncion");
}
miFuncion;


//---RETORNO DE UNA FUNCION
function obtenerAleatorio(){
    return Math.random();
}
console.log(obtenerAleatorio() * 10);


//---OBJETO THIS
var persona2 = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido);
    }
};
persona2.imprimirNombre();
console.log(" ");


//---OPERADOR NEW
function Persona(){
    this.nombre = "Juan";
    this.apellido = "Mendoza";
    this.edad = 30;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido + " (" + this.edad + ")";
    }
}
var juancho = new Persona();
console.log(juancho);
console.log(juancho.nombreCompleto());