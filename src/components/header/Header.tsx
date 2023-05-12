"use client";

import React, { useState } from "react";
import HeaderList from "./HeaderList";
import Button from "../navbar/Button";
import HeaderSearch from "./HeaderSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


interface HeaderProps {
  isHome?: boolean; 
}


const Header: React.FC<HeaderProps> = ({
  isHome,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams(); 
  const query = searchParams.get('q'); 
  const dateRange = searchParams.get('range'); 
  const options = searchParams.get('options'); 

  console.log(query, )

 
 
  return (
    <div className=" h-auto py-10">
      
      <div className="headerList">
        <div className="headerListItem">
          <HeaderList />
        </div>
        {isHome && (
          
        <div className="flex flex-col gap-7 mt-10 container">
          <h1 className="headerTitle text-4xl font-bold">
            A lifetime of discounts? Its Genius.
          </h1>
          <p className="headerDesc">
            Get rewarded for your travels unlock insight more with free booking
            account
          </p>
          <div className="flex gap-5">
            <Button label="Login" secondary />
            <Button label="Register" secondary />
          </div>

          <div>
            <HeaderSearch />
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Header;
