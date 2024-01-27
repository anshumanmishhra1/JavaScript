// const sum = (a , b) =>{
//     console.log(a+b);
// }

// sum(4,5);

// const cube =(n) =>{
//     return n*n*n;
// }

// cube(2);

// const pow = (a,b) =>{
//     return a**b;
// }


/* This with Arrow Function */

const student ={
    name : "Anshuman",
    marks : 95,
    prop : this,  // global scope
    getName : function(){
        console.log(this);
        return this.name;
    },

    getMarks : ()=>{
        console.log(this);  //parent scope -> window
        return this.marks;
    },

    getInfo1: function(){
        setTimeout(()=>{
            console.log(this);  // student
        },2000);
    },

    getInfo2: function(){
        setTimeout(function(){
            console.log(this); // window
        },2000);
    }
    


};




