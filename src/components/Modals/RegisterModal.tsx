'use client';
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback } from "react";
import Modal from "./Modal";

 

const RegisterModal = () => {
    const registerModal = useRegisterModal(); 

    const onSubmit = useCallback(() => {

    }, []); 


    const bodyContent = (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">

            <label>Username</label>
            <input className="w-full p-2 border" />
            </div>
            <div className="flex flex-col gap-3">

            <label>Email</label>
            <input className="w-full p-2 border" />
            </div>
            <div className="flex flex-col gap-3">

            <label>Password</label>
            <input className="w-full p-2 border" />
            </div>
            
        </div>
    )

    const footerContent = (
        <div className="border-t">
            <p>
                New to Booking App?
                <span className="text-blue-500 hover:underline cursor-pointer"> Register</span>
            </p>

        </div>
    )
    return(
        <Modal 
            
            title="Register"
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            actionLabel="Register"
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}

        />
    )
}

export default RegisterModal; 