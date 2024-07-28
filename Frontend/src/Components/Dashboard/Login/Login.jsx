import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Login() {
  return (
    <div className="bg-[#121212]">
      <div className="flex flex-col items-center text-2xl text-white">
        <FontAwesomeIcon icon={faSpotify} />
        <h1>Sign up to start listening</h1>
      </div>
    </div>
  );
}
