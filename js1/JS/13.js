"use strict";

//VAMOS A UNIR DOS OBJETOS CON SPREAD OPERATOR
const animal = {
    tipo: "Gato",
    nombre : "Gatito", 
    edad : 2,
    color : "gris"
}

const acciones = {
    correr: true, 
    saltar: true, 
    arañar: true, 
    joder: true, 
    nadar: false
}

//UNIMOS LOS ANTERIORES DOS OBJETOS CON SPREAD OPERATORS

const animalTotal = {...animal, ...acciones};

console.log(animalTotal);











