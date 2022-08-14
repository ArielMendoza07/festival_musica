//ARRAYS / ARREGLOS
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const edades = [10,12,17,19,20,23];
console.table(edades);

/* //ACCEDEMOS A LOS VALORES DE UN ARREGLO
console.log(meses[0]); //NOS DA ENERO
console.log(edades[4]); //NOS DA 20, PORQUE 4 TIENE EL ELEMENTO 20

//CONOCER LA EXTENSIÓN DE UN ARRAY
console.log(meses.length);

//RECORRER ARRAY Y DAR TODOS LOS VALORES, AUTOMATICAMENTE

meses.forEach(function(meses){
    console.log(meses);
}) */

//ARRAY METHODS
meses.push("Junio"); //AGREGA ELEMENTOS AL FINAL DEL ARRAY
meses.unshift("Diciembre") //AGREGA ELEMENTOS AL INICIO DEL ARRAY


meses.pop() //ELIMINA EL ULTIMO ELEMENTO
meses.shift() //ELIMINA EL PRIMER ELEMENTO DEL ARRAY


//REST OPERATOR SIRVE PARA HACER LO MISMO DE ANTES, PERO MÁS ACTUALIZADO: 
//DEJAMOS EL ARRAY SIN MODIFICAR, CREAMOS UNO NUEVO Y AHÍ SE HACE LA MODIFICACIÓN

const nuevosMeses = [...meses, "Junio"]; //AGREGAMOS TAMBIEN JUNO
console.table(nuevosMeses);








