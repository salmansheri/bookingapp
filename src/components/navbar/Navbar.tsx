import React from "react";
import Button from "./Button";

const Navbar = () => {
  const currentUser = false;
  return (
    <div className="h-24 bg-slate-900  flex items-center border-b">
      <div className="container flex items-center justify-between">
        <span className="logo text-2xl">Booking App</span>
        <div className="navItems flex gap-10">
          {currentUser ? (
            <Button label="Logout" />
          ) : (
            <>
              <Button label="Register"  />
              <Button label="Login"  />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
