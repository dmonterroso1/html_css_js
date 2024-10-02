/**
 * PROMESAS
 * Objeto que representa el eventual resultado 
 * (o error) de una operación asíncrona.
 * 
 * FUNCIÓN CALLBACK
 * Función que se pasa a otra función como argumento
 * y luego se ejecuta dentro de la función externa.
 * 
 */

//Los valores de los parametros (función resolve y reject) se asignan automaticamente (si fue exitosa o rechazada)
const promesaCumplida = false;
const miPromesa = new Promise( (resolve, reject) => { //resolve y reject son funciones
    setTimeout( () => {
        if (promesaCumplida){
            resolve("Promesa cumplida");
        }else{
            reject("Promesa rechazada");
        }
    }, 3000);
} );


//Esta función flecha recibe el resultado de la promesa resuelta.
// miPromesa.then( (valor) => {
//     /**
//      * El valor de "resolve" se pasa al parámetro resultado de 
//      * la función callback, que luego se utiliza dentro de la función.
//      */
//     console.log(valor);
// }, (rechazo) => {
//     console.log(rechazo)
// });

//SE PUEDE PASAR 2 FUNCIONES, UNA PARA LA RESOLVE Y OTRA PARA REJECT
//miPromesa.then(promesaCumplida, promesaRechazada);

//SEGUNDA OPCIÓN PARA MANEJAR EL RESOLVE Y REJECT:
miPromesa
    .then((valor) => {
        console.log(valor);
    })
    .catch((rechazo) => {
        console.log(rechazo);
    });