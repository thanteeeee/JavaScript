const cat = {
    name: "Pipey",
    age: 8,
    whatnName(){
        return this.name;
    },
};

console.log(cat.whatnName()) ;
//Output: Pipey
cat.name = "Nezzar" ;
console.log(cat.whatnName()) ;