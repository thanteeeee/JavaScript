let num1 = '150' ;
let flo1 = '1.50' ;

console.log("***** Converting String to integers *****");
//Converting string to integers
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF')); //Hexadecimal number

console.log("***** Convert Strings to float *****");
//Converting string to float
console.log(parseFloat('1.25abc'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));

console.log("***** More Conversion Example *****");
//More Conversion Examples
//Number after special chareacters are ignored
console.log(parseInt(1.5));
console.log(parseInt('1+1'));

//Using Template Literals
console.log(parseInt(`${1+1}`));

console.log("***** Converting numbers to strings *****")
//Converting numbers to string
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());
