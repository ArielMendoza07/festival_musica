//CREAMOS OBJETO
const animal = {
    nombre : "Gatito",
    edad : 2,
    color : "gris"
}

//ACCEDER A UNA PROPIEDAD DEL OBJETO, CREAR UNA NUEVA VARIABLE CON ELLA Y RETORNARLA

const animalNombre = animal.nombre;

// console.log(animalNombre); //FORMA ANTERIOR

//NUEVA FORMA : DESTRUCTURING
const{nombre, edad, color} = animal;

console.log(nombre, edad, color); //DEBE TENER EL MISMO NOMBRE DE LAS PROPIEDADES DEL OBJETO
                                  //Y NOS VA A DEVOLVER CADA PROPIEDAD DEL OBJETO 