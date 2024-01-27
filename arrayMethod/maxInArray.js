let arr= [1,3,24,36,4,5,6,7,9];

// let max = -1;

// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }

// console.log(max);

let max = arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }

    else {
        return max;
    }
})

console.log(max);