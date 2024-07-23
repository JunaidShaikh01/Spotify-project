import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedAlbumState } from "../Recoil/recoil";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../SideBar/Sidebar";
import axios from "axios";
import SelectedAlbumSongs from "./SelectedAlbumSongs";

export default function SelectedAlbum() {
  const [album, setAlbum] = useState([]);
  const [selectedAlbum] = useRecoilState(selectedAlbumState);
  useEffect(() => {
    const fetchSongs = async () => {
      if (!selectedAlbum) return; // Check if selectedAlbum is defined

      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/dashboard/songs"
        );

        const filteredSongs = response.data.filter(
          (song) => song.albumName === selectedAlbum
        );

        setAlbum(filteredSongs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSongs();
  }, [selectedAlbum]);
  const filteredBanner = album.length > 0 ? album[0].image : "";
  const SongLength = album.length;

  return (
    <div className="bg-black h-screen w-screen   p-2 flex gap-2">
      <Sidebar />
      <div className="bg-[#121212] w-full rounded-lg">
        <Header />
        <div className="h-[35vh] flex items-center bg-gradient-to-b from-[#d64e65] via-[#a83f51] to-[#722a37]">
          <div className="flex gap-5  px-8 items-center">
            <div className="w-[10vw] h-[10vw] ">
              <img
                src={`http://localhost:3000/${filteredBanner}`}
                alt="Selected Album image"
                className="h-full  w-full rounded-lg  shadow-xl"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-[5rem] drop-shadow-xl font-extrabold">
                {selectedAlbum}
              </h1>
              <p className="text-white text-lg">{SongLength} Songs</p>
            </div>
          </div>
        </div>
        <SelectedAlbumSongs songs={album} />
      </div>
    </div>
  );
}
