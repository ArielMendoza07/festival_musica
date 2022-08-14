const shoppingCar = [
    {producto: "Silla gamer", precio: 4000},
    {producto: "Cascos gamer", precio: 1500},
    {producto: "Consola gamer", precio: 12000},
    {producto: "Luces gamer", precio: 400},
    {producto: "Escritorio gamer", precio: 4000}
]


//FOR LOOP
/* for(let i = 0; i <= 100; i++){
    console.log(i)
} */
/* 
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(`El número ${i} es par`)
    } else{
        console.log(`El número ${i} es impar`)
    }
}
 */

//WHILE LOOP
/* let i = 0; //INDICE 

while(i < shoppingCar.length){ //CONDICION
    console.log(`Tu producto ${shoppingCar[i].producto} cuesta ${shoppingCar[i].precio}`)
    
   i++;
} */

//DO WHILE LOOP
let i = 0;

do{
    console.log(`Tu producto ${shoppingCar[i].producto} cuesta ${shoppingCar[i].precio}`);

        i++;
} while( i < shoppingCar.length);