//POO PROTOTYPES
// Y
//OBJECT LITERAL 
const animal = {
    tipo: "gato", 
    edad: 22,
    nombre: "Michi"
}

//OBJECT CONSTRUCTOR DEBE INICIAR CON MAYÚSCULAS
function Producto(nombre_producto, precio_producto, disponible){
    this.nombre_producto = nombre_producto;
    this.precio_producto = precio_producto;
    this.disponible = disponible;
};
const producto_var = new Producto("PC Gamer", 15000, true);

//PROTOTYPE PERMITE CREAR FUNCIONES QUE SE USAN EN OBJETOS ESPECÍFICOS.
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre_producto} tiene un precio de ${this.precio_producto}`
}

//.........................................................

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido; 
}
const cliente = new Cliente("José", "Luis")


Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido} está vivo.`
}

console.log(cliente.formatearCliente());






