// this RECORDAR QUE CON THIS SOLO SE PUEDEN USAR FUNCIONES NO ARROW (?

const pasteleria = {
    cliente: "Eduardo", 
    tipo: "Tres leches", 
    sabor: "chocolate", 
    tamanio: "mediano", 
    costo: 800,
    informacion: function(){
        console.log(`El cliente ${this.cliente} quiere un pastel tipo ${this.tipo} sabor ${this.sabor} de tamaño ${this.tamanio}. El costo total es de ${this.costo}`)
    }
}

pasteleria.informacion();

