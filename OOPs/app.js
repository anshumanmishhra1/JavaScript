// const student ={
//     fullName : "Anshuman mishra",
//     marks : 94.4,
//     printMarks : function(){
//         console.log("makrs = ", this.marks); //student's marks
//     },
// };

const employee ={
    calcTax(){
        console.log("tax is 10%");
    },

    //another method to write function
    calcTax2 : function(){
        console.log("tax rate is 10%");
    }
}

const karanArjun = {
    salary : 50000,
    calcTax(){
        console.log("tax rate is 20%");
    }
}


karanArjun.__proto__ = employee;