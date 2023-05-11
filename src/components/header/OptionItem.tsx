"use client";

import React, { useCallback } from "react";
import { OptionsType } from "./HeaderSearch";

interface OptionItemProps {
  options: OptionsType; 
  setOptions: React.Dispatch<React.SetStateAction<OptionsType>>;
}

const OptionItem: React.FC<OptionItemProps> = ({
 options,
 setOptions
}) => {


    

    const handleCount =(name: string, type: string) => {
       setOptions(prev => ({
        // @ts-ignore
        ...prev, [name]: type === 'i' ? options[name] + 1 : options[name] - 1
       }))
      

    }


  return (
    <div className="text-black flex flex-col justify-between   px-5 py-3">
      <div className="flex gap-1 justify-between">
        <span>Adult</span>
        <button disabled={options.adult <= 1} onClick={() => handleCount("adult", "d")}>-</button>
        <span>{options.adult}</span>
        <button onClick={() => handleCount('adult', 'i')}>+</button>
      </div>
      <div className="flex gap-1 justify-between">
        <span>children</span>
        <button disabled={options.children <= 1} onClick={() => handleCount('children', 'd')}>-</button>
        <span>{options.children}</span>
        <button onClick={() => handleCount('children', 'i')}>+</button>
      </div>
      <div className="flex gap-1 justify-between">
        <span>rooms</span>
        <button disabled={options.room <= 1} onClick={() => handleCount('room', 'd')}>-</button>
        <span>{options.room}</span>
        <button onClick={() => handleCount('room', 'i')}>+</button>
      </div>
    </div>
  );
};

export default OptionItem;
