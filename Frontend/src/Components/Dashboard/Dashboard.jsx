import React from "react";
import Header from "./Header/Header";
import Sidebar from "./SideBar/Sidebar";
import Artist from "./Artist/Artist";
import PopularAlbum from "./PopularAlbum/PopularAlbum";
import Redio from "./Redio/Redio";

export default function Dashboard() {
  return (
    <div className="bg-black h-screen w-screen">
      <div className="flex h-full w-full gap-2 p-2">
        <Sidebar />
        <div className="bg-[#121212] rounded-lg text-white w-full h-full overflow-auto ">
          <Header />
          <Artist />
          <PopularAlbum />
          <Redio />
        </div>
      </div>
    </div>
  );
}
