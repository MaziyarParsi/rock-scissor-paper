let firstPlayerScore = 0;
let secondPlayerScore = 0;

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
  let handState = Math.floor(Math.random() * 3);
  if (handState < 1) {
    handState = "rock";
    document.getElementById("firstPlayerImage").src = "./images/rock.png";
  }
  if (handState < 2) {
    handState = "scissors";
    document.getElementById("firstPlayerImage").src = "./images/scissors.png";
  }
  if (handState < 3) {
    handState = "paper";
    document.getElementById("firstPlayerImage").src = "./images/paper.png";
  }
};
let secondPlayerStart = () => {
  let handState = Math.floor(Math.random() * 3);
  if (handState < 1) {
    handState = "rock";
    document.getElementById("secondPlayerImage").src = "./images/rock.png";
  }
  if (handState < 2) {
    handState = "scissors";
    document.getElementById("secondPlayerImage").src = "./images/scissors.png";
  }
  if (handState < 3) {
    handState = "paper";
    document.getElementById("secondPlayerImage").src = "./images/paper.png";
  }
  console.log(handState);
};
//////////////// end of functions when players click on start ////////////
