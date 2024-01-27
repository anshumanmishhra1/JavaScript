let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "It's A Draw!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";

}

const ShowWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}
const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissor, paper
            userWin = compChoice=== "paper" ? false : true;
        } else if(userChoice=== "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
           userWin = compChoice === "rock" ? false : true;
        }
        ShowWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        console.log("Choice was clicked", choice);
        playGame(userChoice);
    });
});