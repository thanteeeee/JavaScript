const arrayOfnumbers = [1,2,3,4,5,6] ;

const sum = arrayOfnumbers.reduce((accmulator, currentValue) => {
    return accmulator + currentValue ;
});

console.log(sum); //21