import React from "react";
import words from "./words.json";

function addChar(reference) {
    const temp = reference[1]
    const newArr = temp.map((c, i) => {
        if (i === reference[3]) {
            
            return reference[2];
        } else {
            
            return c;
        }
        });
    return newArr
}

function subChar(reference) {
    const temp = reference[1]
    const newArr = temp.map((c, i) => {
        if (i === reference[3]) {
            
            return reference[2].substring(0, reference[2].length - 1);
        } else {
            
            return c;
        }
        });
    return newArr
}

export default function solver(e, ref, setCurrent, setGuesses, setHistory, setGame) {
    const key = e.toLowerCase()
    if (!ref.current[4]) {
        if (key.match(/^[A-z]$/) && ref.current[2].length < 5) {
            setCurrent(ref.current[2]+=key)
            setGuesses(addChar(ref.current));
        } else {
            switch (key) {
                case "backspace": {
                    setCurrent(ref.current[2].substring(0, ref.current[2].length - 1))
                    setGuesses(subChar(ref.current));
                    break
                }
                case "enter" : {
                    if (words.includes(ref.current[2])) {
                        setGuesses(addChar(ref.current));
                        setCurrent('')
                        setHistory(ref.current[3] + 1)
                        if (ref.current[0] === ref.current[2]) {
                            setGame('won')
                        } 
                    }
                }
            }
        }
    }

}


function start(setWord, setCurrent, setGuesses, setHistory, setGame) {
    setWord(words[Math.round(Math.random() * words.length)])
    setCurrent('')
    setGuesses(new Array(5).fill(''))
    setHistory(0)
    setGame('')
}

export {start}