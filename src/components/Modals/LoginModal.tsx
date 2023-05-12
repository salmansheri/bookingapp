'use client';
import { useCallback, useState } from "react";
import Modal from "./Modal";
import useLoginModal from "@/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import  { useForm, FieldValues, SubmitHandler } from 'react-hook-form'; 
import { toast } from 'react-hot-toast'; 

 

const LoginModal = () => {
    const loginModal = useLoginModal(); 
    const [isLoading, setIsLoading] = useState(false); 

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
     } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",

        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        signIn('credentials', {
            ...data,
            
        
        }).then((callback) => {
            if(callback?.ok) {
                toast.success("Logged In")
                
            }
        }).catch((error) => {
            console.log(error); 
            console.log(errors)
            toast.error("Something went wrong"); 
        }).finally(() => {
            setIsLoading(false)
        })



    }

    const bodyContent = (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">

            <label>Email</label>
            <input {...register('email')} className="w-full p-2 border" />
            </div>
            <div className="flex flex-col gap-3">

            <label>Password</label>
            <input {...register('password')} className="w-full p-2 border" />
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
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            title="Login"
            footer={footerContent}
            disabled={isLoading}


        
        />
    )
}

export default LoginModal; 