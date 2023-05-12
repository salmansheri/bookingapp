import React from 'react'; 

interface InputProps {
    placeholder:string; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    disabled?:boolean; 
    secondary?:boolean; 
    value?: string; 
    type: string; 
}

const Input: React.FC<InputProps> = ({
    placeholder,
    onChange,
    disabled,
    secondary,
    value,
    type,
}) => {
  return (
    <input className="p-2 rounded-md w-full outline-none text-black" type={type} placeholder={placeholder} onChange={onChange} />
  )
}

export default Input