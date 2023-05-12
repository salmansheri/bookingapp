'use client'; 

import { ImLocation2 } from 'react-icons/im'

import React from 'react'
import Button from '@/components/navbar/Button';
import ImageModal from '@/app/search/components/modal/ImageModal';
import useImageModal from '@/hooks/useImageModal';

const Header = () => {
    const imageModal = useImageModal();
  return (
    <div className="relative">
        <ImageModal isOpen={imageModal.isOpen} />
   
    <div className=" flex flex-row justify-between items-center">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold ">Tower Street Apartments</h1>
                    <div className="flex flex-row gap-2 items-center">

                    <p>
                        <ImLocation2 />
                    </p>
                    <p>
                        5 Bastava, old town, 33-332 Krakow, Poland
                    </p>

                    </div>
                    <p className="text-sky-400 text-xl">Excellent location - 500m from center</p>
                    <p className="text-green-500 text-xl font-medium">Book a stay over $114 at this property and get a free airport taxi</p>
                </div>
                <div>
                    <Button secondary label="Reserve or Book Now!" />

                </div>

            </div>
    </div>
  )
}

export default Header