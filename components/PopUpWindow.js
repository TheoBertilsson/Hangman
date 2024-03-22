import React, { useEffect } from "react";

const PopUpWindow = ({
  correctLetters,
  wrongLetters,
  word,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let revealWord = "";
  let playable = true;

  function checkWin(correctL, wrongL, corrWord) {
    if (corrWord.length > 0) {
      let status = "win";

      corrWord.split("").forEach((letter) => {
        if (!correctL.includes(letter)) {
          status = "";
        }
      });
      if (wrongL.length === 6) {
        status = "lost";
      }
      return status;
    }

  }

  if (checkWin(correctLetters, wrongLetters, word) === "win") {
    finalMessage = "Congratulations! You Won!";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, word) === "lost") {
    finalMessage = "Too bad! You lost!";
    revealWord = "The word was: " + word;
    playable = false;
  }

  useEffect(() => setPlayable(playable));
  return (
    <div
      className="popupBox"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{revealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default PopUpWindow;
