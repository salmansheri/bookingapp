"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const HotelsSearch = () => {
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const adults = searchParams.get("adults");
  const childrens = searchParams.get("childrens");
  const rooms = searchParams.get("rooms");
  console.log(query, adults, childrens, rooms);
  return (
    <>
      <h1 className="font-bold text-3xl">Seach</h1>
      <div className="w-full flex justify-between gap-2 items-center">
        <label className="text-lg font-medium">Destination</label>
            {/* @ts-ignore  */}
        <input className='w-full  rounded-md p-2 outline-none text-black placeholder:text-gray-700' placeholder={query} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-full flex justify-between">
          <label>adults</label>
          <span>{adults}</span>
        </div>
        <div className="w-full flex justify-between">
          <label>Childrens</label>
          <span>{childrens}</span> 
        </div>
        <div className="w-full flex justify-between">
          <label>rooms: </label>
          <span>{rooms}</span>
        </div>
      </div>
    </>
  );
};

export default HotelsSearch;
