/* Write an arrow function that return the square of a number */

const pow = (n) => (n*n);


/* write a program to print hellow world 5 times at interval of 2s*/

let id = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran");
},10000);