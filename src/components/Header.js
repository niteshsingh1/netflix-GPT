import React from "react";
import { auth } from "../utils/fireBase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate=useNavigate()

  const handleSingOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
       navigate("/error")
    });
    
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex p-2">
        <img
        className="w-12 h-12"
          alt="userIcon"
          src="https://occ-0-4345-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWtYstzFdHB5VDwg1wo0AtmxHp1wtiHQt6kfVzqrLag-FyrhJSX1Suc-w_56yVQPsLfndT57n9KLPVZ-PMVtsUAKpA3TZ6M.png?r=72f"
        />
        <button  onClick={handleSingOut} className="font-bolt text-white">(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
