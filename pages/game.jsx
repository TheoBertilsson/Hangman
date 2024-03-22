import React, {useState,useEffect} from "react";
import HangPole from "../components/HangPole.js";
import WrongLettersBox from "../components/WrongLettersBox.js";
import Word from "../components/Word.jsx";
import PopUpWindow from "../components/PopUpWindow.js";
import AlreadyPressedNotification from "../components/AlreadyPressedNotification.js";
import Layout from "../components/layout.jsx";

function App() {
  const [word, setWord] = useState('')
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)

  function getWord(){
        fetch('https://random-word-api.herokuapp.com/word')
        .then((response) => response.json())
        .then((result) => {
          setWord(result[0])
        })
  }
  useEffect(getWord,[])
  function showBox(){
    setShowNotification(true)
    setTimeout(()=>{
        setShowNotification(false)
    }, 2000)

  }
  function playAgain(){
    setPlayable(true)
    setCorrectLetters([])
    setWrongLetters([])
    getWord()
  }
  useEffect(()=>{
    const keyPressDown = event =>{
        const {key, keyCode} = event
        if (playable && keyCode >= 65 && keyCode <= 90){
          const letter = key.toLowerCase();console.log(word)
          if (word.includes(letter)){

            if(!correctLetters.includes(letter)){
              setCorrectLetters(currentLetters => [...currentLetters, letter])
            } else {
            showBox()
          }
          }else {
            if(!wrongLetters.includes(letter)){
                setWrongLetters(currentLetters => [...currentLetters, letter])
            }else {
                showBox()
            }
        }
        }
    }
    window.addEventListener('keydown', keyPressDown);

    return() => window.removeEventListener('keydown', keyPressDown)
  }, [correctLetters, wrongLetters, playable, word])


  return (
      <Layout>
        <div className="gameBox">
            <HangPole wrongLetters={wrongLetters}/>
            <WrongLettersBox wrongLetters={wrongLetters} />
            <Word word={word} correctLetters={correctLetters}/>
            <PopUpWindow correctLetters={correctLetters} wrongLetters={wrongLetters} word={word} setPlayable={setPlayable} playAgain={playAgain}/>
            <AlreadyPressedNotification showNotification={showNotification}/>
        </div>
      </Layout>
  );
}

export default App;
