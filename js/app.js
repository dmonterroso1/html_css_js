//console.log('Hola mundo') //(Expresión);

//VARIABLES
/* UpperCamelCase, camelCase, snake_case */

//TIPOS DE DATOS
/*Primitivos: Number, String, Boolean, Undefined (para cuando no se le asigna ningun valor a la variable), Null
De Referencia: Array, Object, Functions, Clases*/

let numero = 1; //(Declaración)
let texto = "Hola";
let verdadero = true;
let falso = false;
let noDefinido;
let undef = undefined;
let nulo = null;

console.log(typeof noDefinido); //undefined
console.log(typeof nulo); //null, object
console.log(null === "object"); //false

//OBJETOS
let personaje = {};
//clave: valor
personaje = {
    nombre: "Tanjiro",
    anime: "Demon slayer",
    edad : 16,
};
console.log(personaje);
console.log(personaje.anime);
console.log(personaje['anime']);

delete personaje.anime;
console.log(personaje);


//ARRAYS    
let palabras = [];
palabras = ['hola', 'mundo'];
console.log(palabras[0]);
palabras[2] = 'daniel';
console.log(palabras);
console.log(typeof palabras);


//FUNCIONES
function suma(x) //Parametros
{
    return x + 2;
}
let resultado = suma(5); //Argumentos
console.log(resultado);

/*
DECLARATION -> let, const, function, async function, class, export/import
STATEMENTS -> if, for, else, switch ...
EXPRESSION -> 4+6=10, x=3, miFuncion()
*/

//OPERADORES ARITMETICOS
/**
 + - * / % **
 */

//OPERADORES DE ASIGNACIÓN
let a = 5;
a = a + 5;
a += 5;

//OPERADORES DE COMPARACIÓN
/**
 > >= < <= //Relacionales
 == != === !== //Igualdad
 */
let b = 11;
console.log(a == 10); //True, Comprueba solo el valor
console.log(a != 10); //False
console.log(a === '10'); //False, Comprueba valor y tipo
console.log(a !== '10'); //True


//OPERADORES LOGICOS
/**
 &&, ||, ! (and, or, not)
 */


 //ORDEN DE OPERACIONES
 console.log( 8/2*(2+2) ); // 8/2(2+2) = 16


 //OPERADOR TERNARIO
 let edad = 15;
 let acceso = (edad > 17) ? 'Permitir ingreso' : 'Denegar acceso';
 console.log(acceso);


 //For of (Para arrays)
 let animales = ['perro', 'gato', 'ratón'];
 for (let animal of animales)
 {
    console.log(animal);
 }
 
 let i = 0;
 while ( i < animales.length)
 {
    console.log(animales[i]);
    i++;
 }

 //For in (Para object)
let user = {
    id: 1,
    name: 'Daniel',
    age: 25,
};
for (let prop in user) {
    console.log(prop, user[prop]); //(clave, valor)
};




