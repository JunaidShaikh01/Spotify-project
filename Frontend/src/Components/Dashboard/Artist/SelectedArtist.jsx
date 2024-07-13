import React from "react";
import { useRecoilState } from "recoil";
import { selectedArtistState } from "../Recoil/recoil";
import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Header";

export default function SelectedArtist() {
  const [selectedArtist] = useRecoilState(selectedArtistState);
  return (
    <div className="bg-black p-2 flex gap-1">
      <Sidebar />
      <div className="bg-[#121212] w-full rounded-lg">
        <Header />
        <h1 className="text-white">Selected artist is {selectedArtist}</h1>
      </div>
    </div>
  );
}
