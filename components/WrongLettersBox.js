import React from "react";

const WrongLettersBox = ({wrongLetters}) => {
  return (
    <div className="wrongLettersBox">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
        .map((letter, index) => <span key={index}>{letter}</span>)
          .reduce(
            (previousValue, currentValue) =>
              previousValue === null
                ? [currentValue]
                : [previousValue, ",", currentValue],null)}
      </div>
    </div>
  );
};
export default WrongLettersBox;