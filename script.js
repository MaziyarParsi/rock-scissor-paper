let firstPlayerScore = 0;
let secondPlayerScore = 0;
let secondPlayerHandState = "";
let firstPlayerHandState = "";
const rockImage = "./images/rock.png";
const scissorsImage = "./images/scissors.png";
const paperImage = "./images/paper.png";

const GAME = () => {
  /////// this is when we click on let's play button///////
  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  ////////// end of starting the game process///////////////

  startGame();
};

GAME();

////////// start of real game function ////////////

//////////////// functions when players click on start ////////////
let firstPlayerStart = () => {
  firstPlayerHandState = Math.floor(Math.random() * 3);
  if (firstPlayerHandState < 1) {
    firstPlayerHandState = "rock";
    document.getElementById("firstPlayerImage").src = rockImage;
    document.getElementsByClassName("firstPlayerStart")[0].disabled = true;
  }
  if (firstPlayerHandState < 2) {
    firstPlayerHandState = "scissors";
    document.getElementById("firstPlayerImage").src = scissorsImage;
    document.getElementsByClassName("firstPlayerStart")[0].disabled = true;
  }
  if (firstPlayerHandState < 3) {
    firstPlayerHandState = "paper";
    document.getElementById("firstPlayerImage").src = paperImage;
    document.getElementsByClassName("firstPlayerStart")[0].disabled = true;
  }

  compareHands();
};
let secondPlayerStart = () => {
  secondPlayerHandState = Math.floor(Math.random() * 3);
  if (secondPlayerHandState < 1) {
    secondPlayerHandState = "rock";
    document.getElementById("secondPlayerImage").src = rockImage;
    document.getElementsByClassName("secondPlayerStart")[0].disabled = true;
  }
  if (secondPlayerHandState < 2) {
    secondPlayerHandState = "scissors";
    document.getElementById("secondPlayerImage").src = scissorsImage;
    document.getElementsByClassName("secondPlayerStart")[0].disabled = true;
  }
  if (secondPlayerHandState < 3) {
    secondPlayerHandState = "paper";
    document.getElementById("secondPlayerImage").src = paperImage;
    document.getElementsByClassName("secondPlayerStart")[0].disabled = true;
  }
  compareHands();
};
//////////////// end of functions when players click on start ////////////

/////////////// starting compare hands ////////////////////////
let compareHands = () => {
  if (firstPlayerHandState === secondPlayerHandState) {
    document.querySelector(".winner").textContent = "it's a tie!";
    return;
  }
  if (firstPlayerHandState === "rock") {
    if (secondPlayerHandState === "paper") {
      document.querySelector(".winner").textContent = "Player 2 wins!";
      secondPlayerScore++;
      return;
    } else if (secondPlayerHandState === "scissors") {
      document.querySelector(".winner").textContent = "Player 1 wins!";
      firstPlayerScore++;
      return;
    }
  }
  if (firstPlayerHandState === "paper") {
    if (secondPlayerHandState === "rock") {
      document.querySelector(".winner").textContent = "Player 1 wins!";
      firstPlayerScore++;
      return;
    }
    if (secondPlayerHandState === "scissors") {
      document.querySelector(".winner").textContent = "Player 2 wins!";
      secondPlayerScore++;
      return;
    }
  }
  if (firstPlayerHandState === "scissors") {
    if (secondPlayerHandState === "rock") {
      document.querySelector(".winner").textContent = "Player 2 wins!";
      secondPlayerScore++;
      return;
    }
    if (secondPlayerHandState === "paper") {
      document.querySelector(".winner").textContent = "Player 1 wins!";
      firstPlayerScore++;
      return;
    }
  }
  updatePlayersScore();
  document.getElementsByClassName("resetButton")[0].disabled = false;
};

////////////////////// end of compare hands function ////////////////////////

///////////////////// update the players score  ///////////////////////////

let updatePlayersScore = () => {
  document.getElementById("first_player_score").innerText = firstPlayerScore;
  document.getElementById("second_player_score").innerText = secondPlayerScore;
};
///////////////////// end of update the players score  ///////////////////////////

let restartGame = () => {
  document.getElementsByClassName("firstPlayerStart")[0].disabled = false;
  document.getElementsByClassName("secondPlayerStart")[0].disabled = false;
  document.getElementById("firstPlayerImage").src = "./images/rock.png";
  document.getElementById("secondPlayerImage").src = "./images/rock.png";
  firstPlayerHandState = "";
  secondPlayerHandState = "";
  document.getElementsByClassName("resetButton")[0].disabled = true;
};
