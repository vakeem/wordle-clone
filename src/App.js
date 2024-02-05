import React from "react";
import solver from "./solver";
import { start } from "./solver";
import Guess from "./Guess";
import Popup from "./Popup";
import { useState, useEffect, useRef, useReducer } from "react";


const keyboard = ['qwertyuiop','asdfghjkl','zxcvbnm']

export default function App() {
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([""]);
  const [current, setCurrent] = useState('');
  const [history, setHistory] = useState(0);
  const [game, setGame] = useState('');
  const ref = useRef();
  ref.current = [word, guesses, current, history, game]

  useEffect(()=> {
    start(setWord, setCurrent, setGuesses, setHistory, setGame)
    window.addEventListener('keyup',(e) => solver(e.key, ref, setCurrent,  setGuesses, setHistory, setGame))
    return () =>  {
      window.removeEventListener('keyup', (e) => solver(e.key, ref, setCurrent, setGuesses, setHistory, setGame))
    }
  },[])

  useEffect(() => {
    if (history === 5) {
      setGame('loss') 
    }
  },[history])

  const animate = game
  ? 'animate-pulse'
  : ''

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold uppercase mb-3 md:mb-10">Wordle</h1>

      <Popup winLoss={game} word={word} setGame={setGame}/>
      {guesses.map((_,i) => (
            <Guess word={word} guess={guesses[i]} isGuessed={i < history}/>
        ))}
      <div className="flex flex-col w-full items-center gap-2 mt-3 md:mt-10">
          <div className="flex items-center gap-1 md:gap-2">
              {keyboard[0].split('').map((key => {
                  return (
                      <div onClick={() => solver(key, ref, setCurrent,  setGuesses, setHistory, setGame)} className="hover:border-gray-500 border-2 cursor-pointer flex justify-center font-bold md:text-xl items-center w-8 md:w-12 h-10 md:h-12 bg-gray-300 text-center rounded-lg" >{key.toUpperCase()}</div>
                  )
              }))}
              
          </div>
          <div className="flex items-center gap-1 md:gap-2">
              {keyboard[1].split('').map((key => {
                  return (
                      <div onClick={() => solver(key, ref, setCurrent,  setGuesses, setHistory, setGame)} className="hover:border-gray-500 border-2 cursor-pointer flex justify-center font-bold md:text-xl items-center  w-8 md:w-12 h-10 md:h-12 bg-gray-300 text-center rounded-lg" >{key.toUpperCase()}</div>
                  )
              }))}
          </div>
          <div className="flex items-center gap-1 md:gap-2">
              {keyboard[2].split('').map((key => {
                  return (
                      <div onClick={() => solver(key, ref, setCurrent,  setGuesses, setHistory, setGame)} className="hover:border-gray-500 border-2 cursor-pointer flex justify-center font-bold md:text-xl items-center  w-8 md:w-12 h-10 md:h-12 bg-gray-300 text-center rounded-lg" >{key.toUpperCase()}</div>
                  )
              }))}
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <div onClick={() => solver('enter', ref, setCurrent,  setGuesses, setHistory, setGame)} className="hover:border-gray-500 border-2 cursor-pointer flex justify-center font-bold  items-center p-2 h-10 md:h-12 bg-gray-300 text-center rounded-lg">ENTER</div>
            <div onClick={() =>start(setWord, setCurrent, setGuesses, setHistory, setGame)} className={`${animate} animate-infnite animate-delay-[1200ms] hover:border-gray-500 border-2 cursor-pointer flex justify-center font-bold text-xl items-center p-3 h-10 md:h-12 bg-black text-white text-center rounded-lg`}>RESTART</div> 
            <div onClick={() => solver('backspace', ref, setCurrent,  setGuesses, setHistory, setGame)} className="hover:border-gray-500 border-2 cursor-pointer flex justify-center font-bold text-xl items-center w-12 h-10 md:h-12 bg-gray-300 text-center rounded-lg"><i class="fa-solid fa-delete-left"></i></div>
          </div>
      </div>
    </div>
    
  )
};

