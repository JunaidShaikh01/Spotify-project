import React from "react";
import { useRecoilState } from "recoil";
import { selectedRedioState } from "../Recoil/recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import spotifyData from "../Data/ArtistData";
import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Header";
import SelectedRedioSong from "./SelectedRedioSong";

export default function SelectedRedio() {
  const [selectedRedio] = useRecoilState(selectedRedioState);
  const filteredData = spotifyData.Redio.find(
    (data) => data.id === selectedRedio
  );

  const generateRandomNumberWithCommas = () => {
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    return randomNumber.toLocaleString();
  };

  // console.log("Filterd Data", filteredData);
  return (
    <div className="bg-black h-screen w-screen   p-2 flex gap-2">
      <Sidebar />
      <div className="bg-[#121212] w-full rounded-lg">
        <Header />
        <div className="h-[35vh] flex items-center bg-gradient-to-b from-[#d64e65] via-[#a83f51] to-[#722a37]">
          <div className="flex gap-5  px-8 items-center">
            <div className="w-[10vw] h-[10vw] ">
              <img
                src={filteredData.image}
                alt="Selected artist image"
                className="h-full  w-full rounded-lg   shadow-xl"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-[5rem] drop-shadow-xl font-extrabold">
                {filteredData.Redio}
              </h1>
              <p className="text-white text-lg">{filteredData.Artists}</p>
              <div className=" flex items-center h-full gap-2">
                <div className="flex items-center text-white gap-1">
                  <FontAwesomeIcon icon={faSpotify} />
                  <p>Spotify</p>
                </div>

                <div>
                  <p className="text-white">
                    {generateRandomNumberWithCommas()} Save
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SelectedRedioSong Redio={filteredData.Redio} />
      </div>
    </div>
  );
}
