const choice = document.querySelectorAll(".image");
const usermsg = document.querySelector(".msg1");
const midmsg = document.querySelector(".msg2");
const compmsg = document.querySelector(".msg3");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

let userScore = 0;
let compScore = 0;

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id"); // Get user's choice
    let computerChoice = compchoice(); // Get computer's choice

    // Update messages
    usermsg.innerText = `You Choose: ${userChoice}`;
    compmsg.innerText = `Opponent: Chose: ${computerChoice}`;

    // Determine the result
    let win = true; // Default to losing
    if (userChoice.toLowerCase() === computerChoice.toLowerCase()) {
      midmsg.innerText = "It's a draw!";
    } else {
      if (userChoice === "paper") {
        win = computerChoice === "Rock" ? true : false;
      } else if (userChoice === "Rock") {
        win = computerChoice === "scissors" ? true : false;
      } else if (userChoice === "scissors") {
        win = computerChoice === "paper" ? true : false;
      }

      // Update midmsg based on result
      midmsg.innerText = win 
        ? `You Win! ${userChoice} beats ${computerChoice}` 
        : `You Lose! ${computerChoice} beats ${userChoice}`;
    }

    // Update scores
    result(win);
  });
});

function result(win) {
  if (win) {
    userScore++;
    score1.innerText = userScore;
  } else {
    compScore++;
    score2.innerText = compScore;
  }
}

function compchoice() {
  let choices = ['paper', 'Rock', 'scissors']; // Use consistent lowercase
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
