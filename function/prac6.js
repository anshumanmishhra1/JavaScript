// let str = ["hi", "hello", "bye", "!"];

// function concat(str){
//     let result;
//     for(let i=0; i<str.length;i++){
//         result +=str[i];
//     }
//     return result;
// }

// let p = concat(str);
// console.log(p);  

// let sum = function(a,b){
//     return a+b;
// }

// console.log(sum(3,2));

function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}

multipleGreet(greet,3); 