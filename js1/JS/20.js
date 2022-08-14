//MÉTODOS DE PROPIEDAD
const reproductor = {
    reproduciendo : function(nombre){
        console.log(`Reproduciendo: ${nombre}`);
    },
    pausar : function(nombre){
        console.log(`Pausando ${nombre}...`)
    },
    crearPlaylist : function(nombrePlaylist){
        console.log(`Creando la playlist: ${nombrePlaylist}`)
    }, 
    eliminarPlaylist: function(deletePlaylist){
        console.log(`Eliminando la playlist: ${deletePlaylist}`)
    }
}
//CREAMOS NUEVA FUNCION POR FUERA DEL OBJECT
reproductor.eliminando = function(nombre){
    console.log(`Eliminando ${nombre}...`)
}

//MANDAMOS A LLAMAR 
reproductor.reproduciendo("Gangman style");
reproductor.pausar("Gangman style");
reproductor.eliminando("Gangman style");
reproductor.crearPlaylist("Rock music");
reproductor.eliminarPlaylist("Rock music");
