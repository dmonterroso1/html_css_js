//Declaración de función
//Hoisting: Se elevan al inicio de su contexto de ejecución (global);
function saludar(nombre)
{
    return 'Hola, ${nombre}!';
}
console.log(saludar('Daniel'));


//Expresión de función
//No Hoisting: La función debe ser definida antes de ser llamada
const multiplicar = function(a,b)
{
    return a*b; //return explícito
}
console.log(multiplicar(3,4));


//Función flecha
//Forma más breve de escribir funciones
const sumar = (a, b) => a + b; //return implícito
console.log(suma(5,7));


//Método de objetos
const persona = {
    nombre: 'Daniel',
    saludar: function(){
        return 'Hola, soy ${this.nombre}';
    }
};
console.log(persona.saludar());

const calculadora = {
    sumar(a, b){
        return a + b;
    }
}
console.log(calculadora.sumar(5, 9));


//Función constructor
function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}
const persona1 = new Persona('Luis', 20);

