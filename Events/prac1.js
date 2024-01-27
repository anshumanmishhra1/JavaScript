let modeBtn = document.querySelector("#mode");

let currMod = "Light"; //dark
modeBtn.addEventListener("click", ()=>{
    if(currMod=="light"){
        currMod = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMod = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMod);
});