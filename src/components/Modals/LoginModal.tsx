'use client';
import { useCallback } from "react";
import Modal from "./Modal";
import useLoginModal from "@/hooks/useLoginModal";

 

const LoginModal = () => {
    const loginModal = useLoginModal(); 

    const onSubmit = useCallback(() => {

    }, [])

    const bodyContent = (
        <div className="flex flex-col gap-2">
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



    return (
        <Modal 
            isOpen={loginModal.isOpen}
            actionLabel="Login"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            title="Login"
            footer={footerContent}


        
        />
    )
}

export default LoginModal; 