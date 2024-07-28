import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Form, { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";

export default function Signup() {
  const emailRef = useRef(null);
  //   const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    setEmail(enteredEmail);
    console.log("Email entered", email);
    setEmail("");
  };
  return (
    <div className="bg-[#121212] h-full w-full">
      <div className="flex flex-col items-center text-3xl text-white">
        <FontAwesomeIcon icon={faSpotify} />
        <h1>Sign up to start listening</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex  w-full items-center justify-center"
      >
        <div className="flex flex-col gap-4 justify-center w-[30%]">
          <input type="email" ref={emailRef} placeholder="name@domain.com" />
          <button type="submit" className="bg-white text-black">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
