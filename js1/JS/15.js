//ARRAY METHODSs
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

//ARREGLO DE OBJETOS
const carrito = [
    { producto: "PC gamer", precio : 40000},
    { producto: "Mouse gamer", precio : 1200},
    { producto: "Cascos gamer", precio : 2000},
    { producto: "Silla gamer", precio : 7000},
    { producto: "Xbox", precio : 12000},
    { producto: "Luces rgb", precio : 300},
    { producto: "Escritorio", precio : 7000},
]

//forEach
meses.forEach(function(mes){
    if(mes == "Febrero"){
        //console.log(mes)
    }
});

//INCLUDES NO SIRVE PARA ARREGLO DE OBJETOS     si meses incluye "Enero" retorna true
let resultado = meses.includes("Enero");

//SOME SÍ FUNCIONA PARA ARREGLOS DE OBJETOS
resultado = carrito.some(carrito => carrito.producto === "Cascos gamer")

//.reduce 
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//.filter FILTRA (?)
resultado = carrito.filter(function(trescientos){
    return trescientos.precio == 300
});

console.log(resultado) 









































