const shoppingCar = [
    {producto: "Silla gamer", precio: 4000},
    {producto: "Cascos gamer", precio: 1500},
    {producto: "Consola gamer", precio: 12000},
    {producto: "Luces gamer", precio: 400},
    {producto: "Escritorio gamer", precio: 4000}
]

                                    // MÉTODOS SÓLO PARA ARRAYS / ARREGLOS
//forEach
/* shoppingCar.forEach(function(item){
    console.log(`Tu producto ${item.producto} cuesta ${item.precio}`)
}) */

//forEach con arrow functions
// shoppingCar.forEach(item => console.log(`Tu producto ${item.producto} cuesta ${item.precio}`))


//Map
const arreglo = shoppingCar.map(item => `${item.producto} cuesta ${item.precio} pesos`)

console.log(arreglo);

