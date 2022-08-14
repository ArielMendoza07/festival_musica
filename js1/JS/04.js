// TIPOS DE DATOS
const color = "Verde es mi color favorito"; //TIPO DE DATO STRING
const color2 = String("El rojo de su cabello"); //CONSTRUCTOR STRING

//.LENGTH
console.log(color.length); //.LENGTH ES UN MÉTODO PARA CONOCER LA EXTENSIÓN DE CARÁCTERES (cuántos hay)
console.log(color2.length);

//indexOf
console.log(color.indexOf("favorito")); //RETORNA LA POSICION DEL ELEMENTO DEL PARAMETRO 
console.log(color2.indexOf("rojo"));

//includes
console.log(color.includes("azul")); //VERIFICA SI LA VARIABLE INCLUYE EL ELEMENTO DEL PARAMETRO - true o false
console.log(color2.includes("cabello"));                       