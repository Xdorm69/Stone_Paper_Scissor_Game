let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".box");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = ()=>{
    console.log("Game ends in a draw")
    
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("you win!");
        let audio = new Audio("win.mp3");
        audio.play();
        let audio2 = new Audio("bg.mp3");
        audio2.play();
        userScore++
        userScorePara.innerText = userScore;
    }
    else {
        console.log("You loose!");
        let audio = new Audio("loose.mp3");
        audio.play();
        compScore++
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("User choice = " , userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = " , compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        } else if (userChoice == "paper"){
            userWim = compChoice ==="scissors" ? false : true;
        } else {
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin);
    }
    
};


choices.forEach((box) =>{
    console.log(box);
    box.addEventListener("click" , ()=>{
        const userChoice = box.getAttribute("id");
        console.log("Choice was clicked" , userChoice);
        playGame(userChoice);
    })
})