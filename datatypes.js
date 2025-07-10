let petName = 'Rocky' // Global variable
myFunction()
function myFunction() {
fruit = 'apple'; // Considered global
console.log(typeof petName + '- ' + 'My pet name is ' +petName)
}
console.log(typeof petName + '- ' + 'My pet name is ' + petName +'Fruit name is ' + fruit)

let a = true;
let b = false;

alphabet();

function alphabet() {

    let result1 = typeof alphabet + 5 < 3;
    console.log("Resul 1:", result1); 
    console.log( typeof result1); 

   
    let result2 = typeof +a && b;
    console.log("Result 2:", result2); 
    console.log( typeof result2); 

}