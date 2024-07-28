import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  const signupClickHandler = () => {
    navigate("/signup");
  };

  const loginClickHandler = () => {
    navigate("/login");
  };
  return (
    <div className="bg-[#121212] h-[10vh] flex items-center justify-between px-4 rounded-t-lg">
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
    </div>
  );
}
