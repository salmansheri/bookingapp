'use client'; 

import React from "react";
import Button from "./Button";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useSession, signOut } from 'next-auth/react'; 

const Navbar = () => {
  const { data: session } = useSession(); 
  const currentUser = session?.user?.email;
  const loginModal = useLoginModal(); 
  const registerModal = useRegisterModal(); 
  return (
    <div className="h-24 bg-slate-900  flex items-center border-b">
      <div className="container flex items-center justify-between">
        <span className="logo text-2xl">Booking App</span>
        <div className="navItems flex gap-10">
          {currentUser ? (
            <Button label="Logout" onClick={() => signOut()} />
          ) : (
            <>
              <Button label="Register" onClick={registerModal.onOpen}  />
              <Button label="Login" onClick={loginModal.onOpen}  />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
