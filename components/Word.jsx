import React from "react";

function Word({ word, correctLetters }) {
  return (
    <>
      <div className="word">
        {word.split("").map((letter, index) => {
          return(
          <span className="letter" key={index}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>)
        })}
      </div>
    </>
  );
}

export default Word;
