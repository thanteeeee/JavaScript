//Arrow Function with two arguments
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam
};
console.log(sum(2,5));

//Arrow function with no arguments
const printtHello = () => {
    console.log("hello");
};
printtHello(); //Prints : hello

//Arrow functions with a single argument
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms.`);
};
checkWeight(25); //Baggage weight : 25 kilograms.

const multiply = (a,b) => a*b ;
console.log(multiply(2,30)) ; //Prints : 60