// function oddOrEvenFactory(request){
//     if(request=="odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }

//     else if(request=="even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }

//     else{
//         console.log("wrong request");
//     }
// }



// let request = "odd";

// let func =oddOrEvenFactory(2);
// console.log(func);


/* Methods  */

const calculator ={
    num : 55,

    add : function(a,b){
        return a+b;
    },

    sub : function(a,b){
        return a-b;
    },

    mul : function(a,b){
        return a*b;
    }
};

console.log(calculator.add(1,2));
console.log(calculator.sub(9,2));
console.log(calculator.mul(8,2));
