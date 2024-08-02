import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Tooltip from "./Tooltip";
import { motion } from "framer-motion";
export default function Header({ data }) {
  const [mouseOver, setMouseOver] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const dropdownRef = useRef(null);
  const clickHandler = () => {
    setButtonClicked(!buttonClicked);
  };

  useEffect(() => {
    if (buttonClicked) {
      setMouseOver(false);
    }
  }, [buttonClicked]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setButtonClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const navigate = useNavigate();

  const signupClickHandler = () => {
    navigate("/signup");
  };

  const loginClickHandler = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="bg-[#121212] h-[10vh] flex items-center justify-between px-4 rounded-t-lg relative z-20 ">
      <div className="flex gap-2">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="h-5 w-5 rounded-full font-thin p-2 text-white bg-black"
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          className="h-5 w-5 rounded-full p-2 font-thin text-white bg-black"
        />
      </div>
      {!data ? (
        <div className="flex gap-4 items-center">
          <div
            className="text-lg text-[#fefefe] cursor-pointer"
            onClick={signupClickHandler}
          >
            Sign up
          </div>

          <div
            className="bg-[#fefefe] py-2 px-4 text-black font-semibold rounded-3xl cursor-pointer"
            onClick={loginClickHandler}
          >
            Log in
          </div>
        </div>
      ) : (
        <div
          className="cursor-pointer transform hover:scale-105 transition-colors duration-200 relative"
          onMouseEnter={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
          onClick={clickHandler}
        >
          <div className="h-9 w-9 rounded-full bg-[#1ED760] text-black font-semibold text-xl flex items-center justify-center border-4 border-stone-700 hover:border-black ">
            {data.user.name.charAt(0).toUpperCase()}
          </div>
          {mouseOver && (
            <Tooltip
              style={{
                position: "absolute",
                top: 60,
                right: 30,
              }}
            >
              {data.user.name}
            </Tooltip>
          )}
          {buttonClicked && (
            <motion.div
              ref={dropdownRef}
              className="absolute top-15 right-0 z-50 bg-black rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ul className="flex flex-col gap-2 items-center justify-center w-[10vw] h-[20vh] ">
                <li className="hover:bg-stone-800 w-full text-center">
                  {data.user.name}
                </li>
                <li
                  className="cursor-pointer w-full text-center hover:bg-stone-800"
                  onClick={logoutHandler}
                >
                  Logout
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
