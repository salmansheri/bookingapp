import React from "react";

interface ButtonProps {
  secondary?: boolean;
  onClick?: () => void;
  label: string;
  isSearch?: boolean;
}

const Button: React.FC<ButtonProps> = ({ secondary, onClick, label, isSearch }) => {
  return (
    <button
      className={`
            px-4
            py-2
            border
            rounded-md
            ${secondary && 'bg-blue-500 border-0 hover:bg-opacity-80'}
            ${isSearch && "self-end"}
            


    
        `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
