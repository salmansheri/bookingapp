'use client';

import React from 'react'
import FeaturedItem from './FeaturedItem';

const Featured = () => {
  return (
    <div className='featured flex flex-wrap flex-row  w-full justify-between gap-3'>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
       

    </div>
  )
}

export default Featured