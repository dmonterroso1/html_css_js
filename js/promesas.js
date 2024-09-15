const datos = [
    {
        nombre: 'Daniel',
        edad: 20,
    },
    {
        nombre: 'José',
        edad: 15,
    },
    {
        nombre: 'Eduardo',
        edad: 20,
    }
];

function getDatos()
{
    return new Promise( (resolve, reject) => {
        if (datos.length === 0)
        {
            reject(new Error('Datos vacios'))
        }
        setTimeout ( ()=>{
            resolve(datos);
        }, 5000)
    })
    /*setTimeout( ()=>{
        return console.log(datos);
        //return datos; //undefined en console.log()
    }, 5000)*/
}

getDatos()
    .then((response) => console.log(response))
    .catch((err) => console.log(err.message))
/*getDatos();*/
//console.log(getDatos()); //undefined