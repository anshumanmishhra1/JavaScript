class person {
    constructor(name){
        this.species = "Homo sapiens";
        this.name = name;
    }
    eat () {
        console.log("Eat");
    }
}

class Engineer extends person {
    constructor(name){
        super(name); // to invoke parent class constructor
    }
    work (){
        super.eat();
        console.log("Solve problems, Build something");
    }
}

let engObj = new Engineer("Shraddha");