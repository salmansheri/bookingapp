'use client'; 

import React from 'react'
import { usePathname } from 'next/navigation'; 

import { RiHotelBedFill, RiFlightTakeoffLine } from 'react-icons/ri'
import { AiTwotoneCar } from 'react-icons/ai'; 
import { MdAirportShuttle, MdAttractions } from 'react-icons/md'

import HeaderListItems from './HeaderListItems';


const HeaderList = () => {
  const pathname= usePathname(); 
    const listItems = [
        {
          label: 'stay',
          icon: RiHotelBedFill,
          active: pathname=== "/hotels"
        }, 
        {
          label: 'Flights',
          icon: RiFlightTakeoffLine,
          active: pathname=== "/flights"
          
        },
        {
          label: 'Car Rentals',
          icon: AiTwotoneCar,
          active: pathname=== "/carrentals"
          
        },
        {
          label: 'Attractions',
          icon: MdAttractions,
          active: pathname=== "/attraction"
          
        },
        {
          label: 'Airport Taxis',
          icon: MdAirportShuttle,
          active: pathname=== "/airporttaxis"
          
        },
    
      ]
  return (
    <div>
        <div className="container flex gap-5 items-center justify-between h-12">

        {listItems.map((item) => (
            <HeaderListItems
            key={item.label} 
            label={item.label}
            icon={item.icon}
            active={item.active}
            />
            ))}
            </div>
    </div>
  )
}

export default HeaderList