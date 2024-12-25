let values1 = ['Apple',1,false] ;
let values2 = ['Frise',2,true] ;
let values3 = ['Mars',9,'Apple'] ;

let newvalues = [] ;

values1.forEach((value,index) => {

    if (values2.includes(value)) {
        newvalues.push({ value: value, index: index });
    }
    if (values3.includes(value)) {
        newvalues.push({ value: value, index: index });
    }
    
});

console.log(newvalues);

