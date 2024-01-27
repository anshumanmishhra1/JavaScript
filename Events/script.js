/*
let btn1 = document.querySelector("#btn1")
btn1.onclick = (evt)=>{
    // console.log("btn1 was clicked");
    // let a = 25;
    // a++;
    // console.log(a);
    console.log(evt);
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)
}

let div = document.querySelector("div");
div.onmouseover = ()=>{
    console.log("You are under box");
}

*/


/*📍Event Listener :  */

let btn1 = document.querySelector("#btn1")

btn1.addEventListener("click",(evt)=>{
    console.log("button was clicked - handler 1")
});

btn1.addEventListener("click",(evt)=>{
    console.log("button 2 was clicked - hander 2")
});

const handler3 = () =>{
    console.log("button 2 was clicked - hander3")
}
btn1.addEventListener("click",handler3);

btn1.addEventListener("click",(evt)=>{
    console.log("button 2 was clicked - hander 4")
});

btn1.removeEventListener("click",handler3);