import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { Form } from "react-router-dom";

export default function AdminLogin() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#292929] via-[#202020] to-[#151515]">
      <div className="bg-[#121212] px-20 py-5 w-[50%] rounded-xl shadow-xl ">
        <div className="text-white flex flex-col items-center mt-8 gap-6  border-b border-[#292929]">
          <FontAwesomeIcon className="text-4xl" icon={faSpotify} />
          <h2 className="text-4xl font-semibold mb-6"> Spotify Admin Login</h2>
        </div>
        <Form
          method="post"
          action="/adminLogin"
          className="mt-6 flex flex-col text-white"
        >
          <label className="mb-3">Username</label>
          <input
            className="bg-transparent border rounded py-2 pl-4 text-lg font-semibold mb-4"
            type="email"
            placeholder="Email  or username"
          />
          <label className="mb-3">Password</label>
          <input
            className="bg-transparent border rounded py-2 pl-4 text-lg font-semibold"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#1fdf64] text-black border-none mt-8 font-semibold text-xl py-2 rounded-full mb-4 hover:bg-[#63d28c] active:bg-[#03491d] transform ease-in-out duration-300 ">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}
