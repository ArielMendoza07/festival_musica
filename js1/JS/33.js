//FETCH API
function obtenerEmpleados(){

    const archivo = "JS/empleados.json";

    fetch(archivo)
        .then(function(resultado){
            return resultado.json();
        })
        .then(function(datos){
            console.log(datos);
        })

        empleados.forEach(empleado => {
            console.log(empleado.id);
            console.log(empleado.nombre);
            console.log(empleado.puesto);
        });
}

obtenerEmpleados();
