// function api (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
// }

// async function getWeatherData(){
//     await api(); //1st call
//     await api();
// }


/* 📍Let's make it more clear */

function getData (dataId, getNextData) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}

//async await

async function getAllData(){
    console.log("getting data1....");
    await getAllData(1);
    console.log("getting data2....");
    await getAllData(2);
    console.log("getting data3....");
    await getAllData(3);
}
