//ESTRUCTURAS DE CONTROL
/* const money = prompt("Please, enter your total money: ");
const shoppingTotal = 500;

if(money >= shoppingTotal){
    alert("You can take out your things of here!")
} else{
    alert("You dont have enough money. ")
} */

const grades = 100;

if(grades <= 60){
    console.log("You've failed the semester, sorry. ")
} else if(grades > 60 && grades <= 80){
    console.log("You've passed the semester, but you can still improve next time.")
} else if(grades > 80 && grades <= 100){
    console.log("You have passed. Congratulations!")
} else{
    console.log("")
}