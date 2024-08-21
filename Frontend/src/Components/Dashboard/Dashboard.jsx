import React from "react";
import Header from "./Header/Header";
import Sidebar from "./SideBar/Sidebar";
import Artist from "./Artist/Artist";
import PopularAlbum from "./PopularAlbum/PopularAlbum";
import Redio from "./Redio/Redio";
import FeaturedCharts from "./Featured Charts/FeaturedCharts";
import Footer from "./Footer/Footer";
import { useRecoilState } from "recoil";
import { dateFetchState } from "./Recoil/recoil";
import Player from "./Player/Player";

export default function Dashboard({ data }) {
  const [, setFetchedData] = useRecoilState(dateFetchState);
  setFetchedData(data);

  return (
    <div className="bg-black h-screen w-screen">
      <div className="flex h-[88vh] w-full gap-2 p-2">
        <Sidebar data={data} />
        <div className="bg-[#121212] rounded-lg text-white w-full h-full overflow-auto ">
          <Header data={data} />
          <Artist />
          <PopularAlbum />
          <Redio />
          <FeaturedCharts />
          <Footer />
        </div>
      </div>
      <Player />
    </div>
  );
}
