import React from "react";
import { useRecoilState } from "recoil";
import { selectedCertState } from "../Recoil/recoil";
import spotifyData from "../Data/ArtistData";
import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function SelectedCarts() {
  const [selectedCart] = useRecoilState(selectedCertState);
  const cartData = spotifyData.FeaturedCharts.find(
    (data) => data.id === selectedCart
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
                src={cartData.image}
                alt="Selected artist image"
                className="h-full  w-full rounded-lg   shadow-xl"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-[5rem] drop-shadow-xl font-extrabold">
                {cartData.chart}
              </h1>
              <p className="text-white text-lg">{cartData.title}</p>
              <div className=" flex items-center h-full gap-2">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faSpotify} />
                  <p>Spotify</p>
                </div>

                {/* <div>
                  <p className="text-white">
                    {generateRandomNumberWithCommas()} Save
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
