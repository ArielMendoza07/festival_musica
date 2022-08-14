//ASYNC / AWAIT

function descargarClientes(){
    return new Promise(resolve =>{
        console.log("Descargando clientes...")

        setTimeout( () => {
            resolve("Los clientes fueron descargados con éxito.")
        }, 4000)

    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve =>{
        console.log("Descargando pedidos...")

        setTimeout( () => {
            resolve("Los pedidos fueron descargados con éxito")
        }, 2000)

    });
}

async function app(){
    try {
        // const clientes = await descargarClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes)
        // console.log(pedidos);

        const resultado = await Promise.all([descargarClientes(), descargarUltimosPedidos()]);
        console.log(resultado);

    } catch (error) {
        console.log(error)
    }
}

app();