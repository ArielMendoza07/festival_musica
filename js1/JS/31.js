//API NOTIFICATION
const boton = document.querySelector("#boton");

boton.addEventListener("click", function(){
    Notification.requestPermission()
        .then(resultado => console.log(`La notificación fue ${resultado}`))
}) 

if(Notification.permission == "granted"){
    new Notification("Notificación importante", {
        icon: "../IMG/eventos.png",
        body: "Gracias por aceptar el acceso!"
    })
} 