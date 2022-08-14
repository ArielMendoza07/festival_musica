const cliente = "Juan";
const cuenta = 12000;

//CONCATENACIÓN Y TEMPLATE STRINGS
console.log("El cliente " + cliente + " debe: " + cuenta + " pesos." ) //CONCATENACION (menos usado)

console.log(`El cliente ${cliente} debe ${cuenta} pesos.`) //TEMPLATE STRING; EL RESULTADO ES EL MISMO
             //NO OLVIDAR LAS COMILLAS REVERSAS