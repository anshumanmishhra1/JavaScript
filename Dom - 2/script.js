// let div = document.querySelector("div");
// console.log(div);

// // let id = div.getAttribute("id")
// // console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para1 = document.querySelector("p");
// let changes = para1.setAttribute("class","newClaass");


// let div = document.querySelector("div");
// div.style.backgroundColor = "green"

let newBtn = document.createElement("button");
newBtn.innerText = "text me";
console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn);
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "hello ji kaise ho sare :)";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

