// class Parent{
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {
    
// }

// let obj = new Child ();


class person {
    constructor(){
        this.species = "Homo sapiens";
    }
    eat () {
        console.log("Eat");
    }

    sleep (){
        console.log("sleep");
    }

    work (){
        console.log("Do nothing");
    }
}

class Engineer extends person {
    work (){
        console.log("Solve problems, Build something");
    }
}

class Doctor extends person {
    work (){
        console.log("Solve problems, Treat Patient");
    }
}

let shraddha = new Engineer();