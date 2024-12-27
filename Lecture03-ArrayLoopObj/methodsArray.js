let arr1  = ["A",true,2];

//push and pop
console.log("\n***** Push and pop*****\n") ;
console.log(arr1.push("new value")) ; //Return array lenght
console.log(arr1) ;
console.log(arr1.pop()) ; //Remove last value and return last value
console.log(arr1) ;

//Shift and unshift
console.log("\n*****Shift and unshift*****\n") ;
console.log(arr1.unshift("new value")) ; //Return array lenght
console.log(arr1);
console.log(arr1.shift()) ; //Remove first value and return first value
console.log(arr1) ; 

//Queue use "push" and "shift" !!!

//Concaat
console.log("\n*****Concat*****\n")
let arr2 = ["B",false,3] ;
let newArr = arr1.concat(arr2) ;
let newArr2 = arr2.concat([1,2,3]) ;
console.log(newArr) ;
console.log(newArr2) ;