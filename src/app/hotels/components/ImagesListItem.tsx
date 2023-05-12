'use client';

import ImageModal from '@/app/search/components/modal/ImageModal'
import Image from 'next/image'
import React from 'react'
import useImageModal from '@/hooks/useImageModal';

const ImagesListItem = () => {
  const imageModal = useImageModal(); 
  
  return (
    <div className="relative">
        

    <div className="relative w-96 h-96 rounded-md overflow-hidden border border-solid  cursor-pointer  " onClick={imageModal.onOpen}>
        <Image 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="hotel image"
            fill
            className="object-cover hover:scale-110 transition-all duration-500"
        />
    </div>
    </div>
  )
}

export default ImagesListItem