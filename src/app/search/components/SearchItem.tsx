import Button from '@/components/navbar/Button'
import Image from 'next/image'
import React from 'react'

const SearchItem = () => {
  return (
    <div className="searchItem  flex flex-row ">
        <div className=" relative basis-1/2">

        <Image 
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt="searchItemImage"
            fill
            className="object-cover"

        />
        </div>
        <div className=" basis-2/3 p-3 flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Tower Street Apartments</h1>
            <p className="text-lg">500 from center</p>
            <span className="text-base bg-green-600 w-[40%] p-1 rounded-md text-center">Free airport taxi</span>
            <p>Studio Apartment with Air conditioning</p>
            <div className="flex flex-row gap-3">
                <p className=" text-sm">Entire studio: </p>
                <li className="text-sm">1 bathroom</li>
                <li className="text-sm">21m 1 full bed</li>

            </div>
                <p className="text-green-500 font-bold">Free Cancellation</p>
                <p className="text-green-500">You can cancel later, so lock in this great price today!</p>
        </div>
        <div className=" basis-1/2 flex flex-col justify-between p-3">
            <div className="flex flex-row justify-between">
                <h3>Excellent</h3>
                <span className="bg-blue-500 px-1">8.9</span>

            </div>
            <div className="text-right">
                <h1 className="text-2xl font-medium">$112</h1>
                <p className="text-xs">Includes taxes and fees</p>
                <Button secondary label='See availablity ' />

            </div>
        </div>

    </div>
  )
}

export default SearchItem