// OBJECTS PAR CLAVE/VALOR
const cliente = {
    nombreCliente : "Juan", 
    premium : false, 
    comprasTotales : 18
}

/* console.log(cliente)
console.log(cliente.premium) */

//LOS OBJETOS SON VARIABLES CON MUCHOS DATOS. USAN CORCEHETES Y DOBLE PUNTO " : ". 
//NO OLVIDAR QUE PARA ACCEDER A UNA CLAVE SE USA PUNTO, O SEA console.log(nombreObjeto.clave)


//AGREGAR NUEVAS VARIABLES
cliente.nacimiento = "22/04/2022"; //AL OBJETO "CLIENTE" LE AGREGAMOS UNA NUEVA PROPIEDAD
// console.log(cliente);

//ELIMINAR PROPIEDADES
delete cliente.comprasTotales; //AL OBJETO "CLIENTE" LE ELIMINAMOS LA PROPIEDAD "COMPRASTOTALES"
console.log(cliente);













