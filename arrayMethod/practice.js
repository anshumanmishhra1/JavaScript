/* check if all numbers in our array are mulitples of 10 or not */

// let arr= [10,20,30,40,50,70,40];

// let ans =arr.every((el)=>{
//     return el%10==0;
// })


/* create a function to find the min number in array */

let arr= [10,20,30,4,50,70,40];

let ans = arr.reduce((min,el)=>{
    if(min<el){
        return min;
    }
    else {
        return el;
    }
})
