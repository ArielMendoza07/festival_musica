//"use strict"; //LE DICE A LA CONSOLA QUE EJECUTE EL CÓDIGO JS DE MANERA ESTRICTA

//AUNQUE CON CONST NO SE PUEDEN CREAR NUEVAS PROPIEDADES DE UNA VARIABLE, EN OBJETOS SÍ ES POSIBLE
//PARA EVITAR QUE SEA POSIBLE (QUE NO SE AGREGUEN PROPIEDADES NUEVAS A UN OBJETO, USAMOS Object.freeze())
const animal = {
    nombre : "Gatito", 
    edad : 2,
    color : "gris"
}

//Object.freeze(animal); //.freeze CONGELA TOTALMENTE: NO PERMITE MODIFICAR, AGREGAR ETC., PERO .seal SÍ TE PERMITE MODIFICAR

Object.seal(animal);

animal.nombre = "Michi";

console.log(animal)
console.log(Object.isSealed(animal)) //LE PREGUNAMOS SI ESTÁ CONGELADO O NO

