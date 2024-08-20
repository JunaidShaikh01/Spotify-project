import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentSongState } from "../Recoil/recoil";

export default function Player() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [currentSongs] = useRecoilState(currentSongState);
  console.log("Current Songs: ", currentSongs);

  return (
    <div className="w-full h-[12%] bg-black ">
      {token ? (
        <div className="bg-[#121212] h-full w-[98%] rounded-lg  py-2 px-4 text-white ">
          <div className="fixed bottom-0 left-0 right-0 p-4">
            {currentSongs && (
              <div className="w-full ">
                <div className="w-[35%]  ">
                  <img
                    src={currentSongs.image}
                    alt="no image "
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <h1>{currentSongs.name}</h1>
                    <p>{currentSongs.singerName}</p>
                  </div>
                </div>
                <div className="w-[65%]">
                  <ReactPlayer url={currentSongs.url} playing controls />
                </div>
              </div>
            )}
          </div>
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
