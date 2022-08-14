//ARROW FUNCTIONS

//ESTRUCTURA PARA ARROW FUNCTIONS
const aprendiendo = () => {/*llaves opcionales*/}

//ANTES, SIN ARROW FUNCTIONS
const restar = function(n1, n2){
    console.log(n1 - n2);
}
restar(100, 1);

//DESPUES, CON ARROW FUNCTIONS
 const sumar = (n1, n2) => console.log(n1 + n2)
 sumar(10, 10);

//VAMOS A CONVERTIR EL SIGUIENTE CÓDIGO A ARROW FUNCTIONS

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

//forEach ANTES, SIN ARROW FUNCTIONS
meses.forEach(function(mes){
    if(mes == "Febrero"){
        //console.log(mes)
    }
});
//forEach DESPUÉS CON ARROW FUNCTIONS
meses.forEach(mes => {
    if(mes === "Marzo"){
        console.log("Marzo existe");
    }
})

//SOME SÍ FUNCIONA PARA ARREGLOS DE OBJETOS
resultado = carrito.some(carrito => carrito.producto === "Cascos gamer")

//.reduce 
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//.filter FILTRA (?) SIN ARROW FUNCTONS
resultado = carrito.filter(function(trescientos){
    return trescientos.precio == 300
});
//CON ARROW FUNCTIONS
resultado = carrito.filter(trescientos => trescientos.precio == 300)


console.log(resultado) 









































