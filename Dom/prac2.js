let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText = "new Unique value 1"

let idx = 1;
for (div of divs){
    div.innerText = `Anshuman${idx} `
    // console.log(div.innerText);
    idx++;
}