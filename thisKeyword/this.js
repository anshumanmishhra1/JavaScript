const student = {
    name : "shraddha",
    age : 23,
    eng : 95,
    math : 93,
    phy : 84,

    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks ${avg}`);
    }
};

function getAvg(){
    console.log(this);
    let avg = (this.eng + this.math + this.phy)/3;
    console.log(`${this.name} got avg marks ${avg}`);
}