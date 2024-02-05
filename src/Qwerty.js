import React from "react";
import solver from "./solver";

export default function Qwerty({states}) {
    const keyboard = ['qwertyuiop','asdfghjkl','zxcvbnm']
    return (
        <div className="flex flex-col w-full items-center">
            {keyboard.map((row) => {
                return (
                    <div className="flex items-center gap-2">
                        {row.split('').map((key => {
                            return (
                                <div className="flex justify-center font-bold text-xl items-center w-12 h-12 bg-gray-300 text-center rounded-lg" >{key.toUpperCase()}</div>
                            )
                        }))}
                    </div>
                )
            })}
        </div>
    )
}