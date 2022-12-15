import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Link, useNavigate } from "react-router-dom";
import { navlinks } from "../constants";
import { useStateContext } from "../context";

const Header = () => {
    
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <header
      className={`fixed flex top-0 left-0 right-0 bg-slate-900 h-[64px] 
        justify-between items-center px-4 shadow-lg`}
    >
      <div className={`flex-1/3`}>
        <h1 className="text-2xl text-pink-600">
          Crowd<span className="text-pink-800">Fun</span>
        </h1>
      </div>
      <div className={`flex-1/3`}>
        <nav>
          <ul className="flex gap-2 ">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex gap-3 ${
                  isActive === link.name 
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                {" "}
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-pink-600" : "text-gray-300 cursor-pointer"
                  }`}
                >
                  {link.name}
                </p>{" "}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={`flex-1/3`}>
        <ConnectWallet accentColor="#db2777" colorMode="dark" />
      </div>
    </header>
  );
};

export default Header;
