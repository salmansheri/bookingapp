import Image from 'next/image'
import React from 'react'

const FeaturedItem = () => {
  return (
    <div className="border relative rounded-lg overflex-none">
      <Image 
        src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
        alt="featured Image"
        height="450"
        width="500"
      />
      <div className='featuredtitle absolute z-50 bottom-16 left-5 flex flex-col gap-3'>
        <h1 className="text-3xl font-bold text-gray-200">
          Dublin


        </h1>
        <h2 className='text-xl'>123 propertiies</h2>

      </div>

    </div>
  )
}

export default FeaturedItem