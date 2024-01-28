const button = document.querySelector("button");
const inp = document.querySelector("input");
const ul = document.querySelector("ul");

button.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";
})