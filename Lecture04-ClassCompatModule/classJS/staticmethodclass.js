class Dog {
    constructor(name){
        this._name = name ;
    }

    introduce(){
        console.log("This is " + this._name + " !");
    }

    //A static method
    static bark(){
        console.log("Woof!");
    }
}

const mydog = new Dog("Buster") ;
mydog.introduce();

//calling the static method
Dog.break();

