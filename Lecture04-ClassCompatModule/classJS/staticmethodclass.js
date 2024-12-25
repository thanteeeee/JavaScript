class Dog {
    constructor(name){
        this._name = name ;
    }

    introduce(){
        console.log("This is " + this._name + " !");
    }

    //A static method
    static break(){
        console.log("Woof!");
    }
}

const mydog = new Dog("Buster") ;

