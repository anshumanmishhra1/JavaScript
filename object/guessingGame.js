const max = prompt("Enter the max number");
const random = Math.floor(Math.random() * max) +1;
console.log(random);

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("User Quit");
    }

    else if(guess == random){
        console.log("you are right!!");
        break;
    }

    else if(guess<random){
       guess = prompt("Hint : Your guess is to small, please try again!");
    }

    else if(guess > random){
       guess = prompt("Hint : Your guess is too large, please try again !!");
    }


    // else{
    //     guess = prompt("Your guess is wrong, Please try again!");
    // }
}
