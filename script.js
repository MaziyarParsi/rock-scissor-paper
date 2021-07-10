const GAME = () => {
  let firstPlayerScore = 0;
  let secondPlayerScore = 0;
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

  ////////// start of real game function ////////////

  startGame();
};
GAME();
