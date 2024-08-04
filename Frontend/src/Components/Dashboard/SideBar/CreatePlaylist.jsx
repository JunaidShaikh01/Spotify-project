import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePlaylist() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/library")
  };
  return (
    <div className="bg-[#1f1f1f] rounded-lg shadow-xl flex flex-col gap-1 py-4 px-4 ">
      <p className="text-white">Create your playlist </p>
      <p className="text-[#b2b2b2]">it's easy, we'll help you</p>
      <button
        className="px-4 py-1 mt-4  rounded-full bg-white font-bold text-black tracking-widest  transform hover:scale-105  transition-colors duration-200"
        onClick={clickHandler}
      >
        Create Playlist
      </button>
    </div>
  );
}
