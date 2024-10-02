function ordenarProducto(producto){
    return new Promise( (resolve, reject) => {
        console.log(`Ordenando: ${producto}`);
        setTimeout(() => {
            if(producto === "taza"){
                resolve('Ordenando una taza...')
            }else{
                reject("Este producto no esta disponible")
            }
        }, 2000);
    });
}

function procesarPedido(respuesta){
    return new Promise( resolve => {
        console.log("Procesando respuesta... ")
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(() => {
            resolve("Gracias por tu compra!")
        }, 4000);
    });
}



async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto);
        console.log("Respuesta recibida");
        console.log(respuesta);
        
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);

    }catch (err) {
        console.log(err);
    }
}

realizarPedido("taza");
