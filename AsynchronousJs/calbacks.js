// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b, sumCallback) {
//     sumCallback(a,b);
// }

// calculator(1,2,sum);

// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello,3000);


// function getData (dataId, getNextData) {
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }


//callback hell (nested callback)
// getData(1, () => {
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// }); 


/* Promises in callback */


// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     // resolve(123);
//     reject("some error occured");
// });

// function getData (dataId, getNextData) {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//                 console.log("data",dataId);
//                 resolve("success");
//                 if(getNextData){
//                     getNextData();
//                 }
//         },5000);
//     });
// }

// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//         reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("Promise fulfilled",res)
// });

// promise.catch((err)=>{
//     console.log("Rejected",err);
// })


/* Promises chaining :  */

// function asyncFunc1(){
//     return  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// };
// function asyncFunc2(){
//     return  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// };

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//     });
// });



/*Just for Understanding  */

function getData (dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
                console.log("data",dataId);
                resolve("success");
        },5000);
    });
}

//promise chain
getData(1).then((res)=>{
    return getData(2);
    }).then((res)=>{
        console.log(res);
});