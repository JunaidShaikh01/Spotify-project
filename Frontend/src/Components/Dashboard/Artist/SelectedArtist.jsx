import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedArtistState } from "../Recoil/recoil";
import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Header";
import axios from "axios";
import artists from "../Data/ArtistData";

export default function SelectedArtist() {
  const [selectedArtist] = useRecoilState(selectedArtistState);
  const [artist, setArtist] = useState(null);
  console.log("SelectedArtist", selectedArtist);
  const fetchSongs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/dashboard/songs"
      );

      const filteredSongs = response.data.filter(
        (song) => song.singerName === selectedArtist
      );
      setArtist(filteredSongs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [selectedArtist]);

  console.log("Artist:", artist);

  const filteredBanner = artists.find(
    (artist) => artist.artist === selectedArtist
  );

  return (
    <div className="bg-black h-screen w-screen   p-2 flex gap-2">
      <Sidebar />
      <div className="bg-[#121212] w-full rounded-lg">
        <Header />
        <div className="h-[35vh] flex items-center bg-gradient-to-b from-[#d64e65] via-[#a83f51] to-[#722a37]">
          <div className="flex gap-5  px-8 items-center">
            <div className="w-[10vw] h-[10vw] ">
              <img
                src={filteredBanner.image}
                alt="Selected artist image"
                className="h-full  w-full rounded-full  shadow-xl"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-[5rem] drop-shadow-xl font-extrabold">
                {selectedArtist}
              </h1>
              <p className="text-white text-lg">40,373,319 monthly listeners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
