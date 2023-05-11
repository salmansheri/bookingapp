'use client'; 

import React from 'react'
import { IconType } from 'react-icons'; 

interface HeaderListItemsProps {
    label: string; 
    icon: IconType; 
    active?:boolean; 
}

const HeaderListItems: React.FC<HeaderListItemsProps> = ({
    label,
    icon: Icon,
    active
}) => {
  return (
    <div className={`flex items-center text-white gap-1 cursor-pointer hover:border px-4 py-2 rounded-full ${active && "border"}`}>
        <Icon size={30} />
        {label}
    </div>
  )
}

export default HeaderListItems