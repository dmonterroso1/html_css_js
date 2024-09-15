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
        }, 5000);
    });
}

async function fetchingDatos() {
    const variable = await getDatos();
    console.log(variable);
}


async function ejemplo() {
    await new Promise( (resolver, rechazar) => {
        setTimeout(()=>{
            resolver(console.log('te prometo'));
        }, 5000);
    });
    console.log('que te esperaré');
}

fetchingDatos();
ejemplo();


