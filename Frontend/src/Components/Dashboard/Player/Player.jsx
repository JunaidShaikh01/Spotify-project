import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentSongState } from "../Recoil/recoil";
import "./PlayerStyles.css"; // Import custom CSS file

export default function Player() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [currentSongs] = useRecoilState(currentSongState);
  console.log("Current Songs: ", currentSongs);

  return (
    <div className="w-full h-[12vh] bg-black">
      {token ? (
        <div className="bg-[#121212] h-full w-[98%] rounded-lg py-2 px-4 text-white flex items-center">
          {currentSongs && (
            <div className="flex items-center w-full h-full">
              <div className="flex items-center w-[35%] space-x-4">
                {/* Aligning image and text in a row */}
                <img
                  src={currentSongs.image}
                  alt="no image"
                  className="w-12 h-12 rounded-md"
                />
                <div>
                  <h1 className="text-lg font-bold">{currentSongs.name}</h1>
                  <p className="text-sm text-gray-400">
                    {currentSongs.singerName}
                  </p>
                </div>
              </div>
              <div className="w-[65%] h-full custom-player">
                <ReactPlayer
                  url={currentSongs.url}
                  playing
                  controls
                  height="100%"
                  width="100%"
                  style={{ backgroundColor: "#121212", color: "#1db954" }} // Example inline styles
                  config={{
                    file: {
                      attributes: {
                        controlsList: "nodownload",
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-[#121212] h-full w-[98%] rounded-lg flex justify-between py-2 px-4 text-white">
          <div>
            <h1>Preview of Spotify</h1>
            <p>
              Sign up to get unlimited songs and podcasts with occasional ads.
              No credit card needed.
            </p>
          </div>
          <button
            className="py-3 w-[15%] rounded-full bg-white font-bold text-black tracking-widest transform hover:scale-105 hover:bg-gray-300 transition-colors duration-200"
            onClick={() => navigate("/Signup")}
          >
            Sign up free
          </button>
        </div>
      )}
    </div>
  );
}
