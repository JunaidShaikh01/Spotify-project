import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  console.log("Isopen ", isOpen);
  return (
    <div className="flex w-full h-full items-center px-10 bg-[#1E1E1E] text-white justify-between relative rounded-md">
      <FontAwesomeIcon className="text-4xl" icon={faSpotify} />
      <div className="flex gap-3 text-2xl  ">
        <p
          className="bg-slate-50 mx-auto h-8 w-8 rounded-full text-center text-black cursor-pointer "
          onClick={handleOpen}
        >
          A
        </p>
        <h2 onClick={handleOpen} className="cursor-pointer">
          Admin
        </h2>
      </div>
      {isOpen && (
        <div className="absolute right-[2%] top-[70%] mt-2 w-48  border border-black rounded-lg shadow-lg bg-[#1b1a1a] ">
          <div className="p-4">
            <div className="flex justify-end text-white">
              <FontAwesomeIcon icon={faX} onClick={handleOpen} />
            </div>
            <h2 className="text-xl font-semibold text-white flex items-center">
              Admin
            </h2>
            <button className="mt-4 w-full py-2 px-4 bg-[#1fdf64] text-black   font-bold rounded-lg  hover:bg-[#63d28c] active:bg-[#03491d] transform ease-in-out duration-300">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
