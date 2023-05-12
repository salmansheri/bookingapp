'use client'; 

import React, { useCallback, useState } from "react";
import { RiHotelBedFill, RiCalendar2Fill } from "react-icons/ri";
import Input from "../input/Input";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Button from "../navbar/Button";
import RangePicker from "../input/RangePicker";
import { format } from 'date-fns';
import OptionItem from "./OptionItem";
import { useRouter } from "next/navigation";


export type OptionsType ={
    adult: number,
    children: number,
    room: number
}
const HeaderSearch = () => {
    const router = useRouter(); 
    const [destination, setDestination] = useState(""); 
    const [hasOpen, setHasOpen] = useState<boolean>(false); 
    const [hasOpenOptions, setHasOpenOptions] = useState<boolean>(false);

    
    
    const [options, setOptions] = useState<OptionsType>({
        adult: 1,
        children:0,
        room:1,
    })
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const handleSearch = useCallback(() => {
      router.push(`/search?q=${destination}&adults=${options.adult}&childrens=${options.children}&rooms=${options.room}`)
      

    }, [router, destination, options])
    console.log(destination)

  return (
    <div className="bg-white border flex gap-2 items-center px-1 rounded-md relative">
      <div className="w-[30%] flex items-center">
        <RiHotelBedFill color="black" size={30} />

        <Input placeholder="Where are you going?" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDestination(e.target.value)} />
      </div>
      <div className="w-[30%] flex items-center gap-3 cursor-pointer" onClick={() => setHasOpen(!hasOpen)}>
        <RiCalendar2Fill color="black" size={30}  />

        <span className="text-black">{`${format(dateRange[0].startDate, "MM/dd/yyyy")} to ${format(dateRange[0].endDate, "MM/dd/yyyy")}`}</span>
      </div>
      <div onClick={() => setHasOpenOptions(!hasOpenOptions)} className="w-[50%] flex items-center gap-3 cursor-pointer">
        <BsFillPersonPlusFill color="black" size={30} />

        <span className="text-black">{`${options.adult} adults . ${options.children} children . ${options.room} rooms`}</span>
        {hasOpenOptions && (

        <div className="options absolute top-11 bg-white z-50">
            <OptionItem options={options} setOptions={setOptions}  />

        </div>
        )}
      </div>
      <div className="self-end">
        <Button label="search" secondary onClick={handleSearch}/>
      </div>
      {hasOpen && (

          <div className="absolute left-72 top-14 z-50">

    <RangePicker dateRange={dateRange} setDateRange={setDateRange} />
      </div>
          )}
    </div>
  );
};

export default HeaderSearch;
