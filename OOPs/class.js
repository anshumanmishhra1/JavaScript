class ToyotaCar {
    constructor(brand,mileage){
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    // setBrand(brand){
    //     this.bran= brand;
    // }
};

    //new car   //keyword //oldclass
let fortuner =  new ToyotaCar("fortuner",10);
console.log(fortuner);
let lexus =  new ToyotaCar("lexus",12);
console.log(lexus);

