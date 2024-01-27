// let arr = [1,2,3,4,5]; 
// let ans = Math.min(...arr);


/*Spread with literals */

// let arr =[1,2,3,4,5];
// let newArr=[...arr];
// console.log(newArr);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...odd, ...even];


/*Spread with Object literals */

const data = {
    email : "ironman@gmail.com",
    password : "abcd"
};

const dataCopy = {...data,id:123, country : "India"};
