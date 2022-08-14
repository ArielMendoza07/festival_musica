//CLASES : LOS NOMBRES DE LAS CLASES SIEMPRE EN MAYÚSCULAS
class Producto{
   constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
   }

   formateaProducto(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
   }

   precioProducto(){
    return `El precio de ${this.nombre} es de ${this.precio} pesos`
   }
}
const producto = new Producto("Papitas", "15");
const producto2 = new Producto("TV", 7000);


//HERENCIA
class Videojuego extends Producto{
    constructor(nombre, precio, disponible){
        super(nombre, precio);
        this.disponible = disponible;
    }

    formateaProducto(){
        return `${super.formateaProducto()} y su disponibilidad es ${this.disponible}`
       }
    
       precioProducto(){
        return `${super.precioProducto()} y su disponibilidad es ${this.disponible}`
       }
}

const juego1 = new Videojuego("The legend of Zelda", 250, false);
const juego2 = new Videojuego("Mario Kart", 500, true)

// console.log(producto.formateaProducto());
// console.log(producto2.precioProducto());
console.log(juego1.precioProducto());
console.log(producto.precioProducto());
console.log(juego2.formateaProducto());