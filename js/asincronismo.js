//PARECIDO A UN PARADIGMA DE PROGRAMACIÓN
 /**
  * JAVASCRIPT SOLO EJECUTA UNA TAREA A LA VEZ
  * Código sincrono -> lleva una secuencia de inicio a fin, SIN TRASLAPARSE
  * Código asíncrono -> no lleva una secuencia, hay bloques que pueden quedar en espera y continuar con el resto de código,
  *  despues de cierto tiempo finalizará el bloque que quedó en espera
  */


function algoAsincrono()
{
    console.log("Hola Daniel!")
}

console.log('Inicio código');
setInterval(() => {
    'Hola Mundo! \n Esto es un bloque asíncrono'
}, 6000);
//setInterval(algoAsincrono,6000);
console.log('Fin del código');
