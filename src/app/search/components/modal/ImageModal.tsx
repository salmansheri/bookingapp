'use client'; 

import React from 'react'; 
import { AiFillCloseCircle } from 'react-icons/ai';
import useImageModal from '@/hooks/useImageModal';
import Image from 'next/image';

interface ImageModalProps {
    isOpen?: boolean; 
}

const ImageModal: React.FC<ImageModalProps> = ({
    isOpen
}) => {
    const imageModal = useImageModal(); 

    if(!isOpen) {
        return null; 
    }
  return (
    <div className="z-50 bg-white/20 h-screen w-full absolute flex justify-center items-center transition">
        <div className="bg-white w-[80%] h-[80%] relative">
            <div className="absolute z-50 right-0 cursor-pointer" onClick={imageModal.onClose}>
                <AiFillCloseCircle color='black' size={30} />
            </div>
            <div>
                
            </div>
            
        </div>
    </div>
  )
}

export default ImageModal