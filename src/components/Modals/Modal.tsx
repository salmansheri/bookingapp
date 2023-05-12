'use client';
import { useCallback } from "react";
import { IoMdClose } from 'react-icons/io'
import Button from "../navbar/Button";

 

interface ModalProps {
    isOpen?: boolean; 
    onOpen?: () => void; 
    onClose: () => void; 
    onSubmit?: () => void; 
    title?: string; 
    body?: React.ReactElement; 
    footer?: React.ReactElement; 
    actionLabel: string; 
    disabled?: boolean; 

}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onOpen,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
}) => {

    const handleSubmit = useCallback(() => {

    }, [])

    if(!isOpen) {
        return null; 
    }
   
    return (
        <div className="flex justify-center items-center overflew-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
            <div className="bg-white text-black w-3/6 rounded-md p-10 h-auto">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-3xl font-semibold">{title}</h1>
                    <IoMdClose size={30} onClick={onClose} />
                </div>
                <div className="mt-3">
                    {body}

                </div>

                <div className="my-5 ">

                <Button secondary label={actionLabel} onClick={onSubmit}  />
                </div>

                <div className="text-center ">
                    <div className="mt-5">

                    {footer}
                    </div>
                </div>

               
              
            </div>
            
        </div>
    )

}

export default Modal; 