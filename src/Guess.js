import React from "react";

export default function Guess({isGuessed, guess, word}) {
    return (
    <div className="grid grid-cols-5 gap-1 md:gap-2">
        {new Array(5).fill(0).map((_,i) => {
            const bgColor = !isGuessed
            ? "bg-white"
            : guess[i] === word[i]
            ? "animate-correct"
            : word.includes(guess[i])
            ? 'animate-close'
            : 'bg-white animate-rotate-y'
            
            const animate = (guess[i] && !isGuessed)
            ? "animate-jump animate-delay-0"
            : (i == 0)
            ? 'animate-delay-[450ms]'
            : (i === 1)
            ? 'animate-delay-[560ms]'
            : (i === 2)
            ? 'animate-delay-[670ms]'
            : (i === 3)
            ? 'animate-delay-[780ms]'
            : (i === 4)
            ? 'animate-delay-[890ms]'
            : ''

           return ( 
            <div className={`${bgColor} ${animate} animate-duration-[550ms] backface-hidden text-2xl bg-gr h-14 md:h-16 w-14 md:w-16 border-2 my-1 border-gray-400 text-black uppercase font-bold flex items-center justify-center`}>
                {guess[i]}
            </div>)
        })}
        
    </div>
    )
}