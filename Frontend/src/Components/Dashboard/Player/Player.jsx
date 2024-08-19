import React from "react";
import { useNavigate } from "react-router-dom";

export default function Player() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div className="w-full h-[12%] bg-black flex justify-center items-center">
      {token ? (
        <div className="bg-[#121212] h-full w-[98%] rounded-lg flex justify-between py-2 px-4 text-white ">
          <h1> There is token available</h1>
        </div>
      ) : (
        <div className="bg-[#121212] h-full w-[98%] rounded-lg flex justify-between py-2 px-4 text-white ">
          <div className="">
            <h1>Preview of Spotify</h1>
            <p>
              Sign up to get unlimited songs and podcasts with occasional ads.
              No credit card needed
            </p>
          </div>
          <button
            className="px- py-3  w-[15%] rounded-full bg-white font-bold text-black tracking-widest  transform hover:scale-105 hover:bg-gray-300 transition-colors duration-200"
            onClick={() => navigate("/Signup")}
          >
            Sign up free
          </button>
        </div>
      )}
    </div>
  );
}
