//FUNCIONES QUE RETORNAN VALORES
/* function sumar(n1, n2){
    return n1 +  n2
}; 

const resultado = sumar(2,4)

console.log(resultado) */


let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15
}

total = agregarCarrito(200);
total = agregarCarrito(1000);
total = agregarCarrito(200);
total = agregarCarrito(1298)


console.log(total);

const totalAPagar = Math.ceil(calcularImpuesto(total)); 

console.log(`El total a pagar, con impuestos, es de $${totalAPagar}`);

