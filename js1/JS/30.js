//PROMISES
// const usuarioAutenticado = new Promise( (resolve, reject) => {
//     const auth = true;
    
//     if(auth){
//         resolve("Usuario autenticado"); //SI EL PROMISE SE CUMPLE
//     } else{
//         reject("No se pudo autenticar"); //si no se cumple
//     }
// });

// usuarioAutenticado
//     .then(resolve => console.log(resolve))
//     .catch(reject => console.log(reject))


const num = 1; 

const numeroDiez = new Promise(function(resolve, reject){
    if(num == 10){
        resolve("El número es igual a diez.");
    } else{
        reject(`El número ${num} no es igual a diez`);
    }
})

numeroDiez
    .then((function(resolve){
        console.log(resolve);
    }))
    .catch(function(reject){
        console.log(reject);
    })

//EXISTEN 3 VALORES:

//fulfilled: sí se cumplió
//pending: está pendiente
//rejected: no se cumplió