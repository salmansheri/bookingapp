"use client";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Modal from "./Modal";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-hot-toast'; 

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
        setIsLoading(true);

        await axios.post("/api/register", data).then(() => {
            toast.success("Successfully register")
        })
        registerModal.onClose(); 

    } catch(error) {
        console.log(error as any)
        toast.error("Something went wrong"); 

    } finally {
        setIsLoading(false); 
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-3">
        <label>Username</label>
        <input
          disabled={isLoading}
          className="w-full p-2 border"
          {...register("username")}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label>Email</label>
        <input
          disabled={isLoading}
          className="w-full p-2 border"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label>Password</label>
        <input
          disabled={isLoading}
          className="w-full p-2 border"
          {...register("password")}
        />
      </div>
    </div>
  );

  const footerContent = (
    <div className="border-t">
      <p>
        New to Booking App?
        <span className="text-blue-500 hover:underline cursor-pointer">
          {" "}
          Register
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      title="Register"
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      actionLabel="Register"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
      disabled={isLoading}
    />
  );
};

export default RegisterModal;
