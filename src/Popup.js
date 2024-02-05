import React from "react";
import { useState, useEffect } from "react";

export default function Popup({winLoss, setGame, word}) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    },[winLoss])
    return (
        <>
        { (winLoss === 'won' && show) 
        ? <div className="animate-popup animate-once animate-delay-[1200ms] top-5 absolute bg-gray-200 p-4 mb-4 border-4 w-96 border-gray-100 rounded-xl text-xl font-bold text-center">
           AMAZING, YOU WON.
            <i class="fa-solid fa-xmark absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShow(false)}></i>
            </div>
        : (winLoss === 'loss')
        ?<div className="animate-popup animate-once animate-delay-[1200ms] top-5 absolute bg-gray-200 p-4 mb-4 border-4 w-96 border-gray-100 rounded-xl text-xl font-bold text-center">
            YOU LOST. THE WORD WAS <span onClick={() => setShow(false)} className="text-red-500">{word.toUpperCase()}</span></div>
        : <></>
        }
        </>
      );
}