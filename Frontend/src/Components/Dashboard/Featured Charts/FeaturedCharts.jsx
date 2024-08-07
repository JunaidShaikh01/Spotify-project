import React, { useState } from "react";
import spotifyData from "../Data/ArtistData";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedCertState, selectedRegionState } from "../Recoil/recoil";
import { useNavigate } from "react-router-dom";

export default function FeaturedCharts() {
  const [selectedCart, setSelectedCart] = useRecoilState(selectedCertState);
  const [hoveredAlbum, setHoveredAlbum] = useState(null);
  const setSelectedRegionState = useSetRecoilState(selectedRegionState);
  const navigate = useNavigate();

  const clickHandler = (id, region) => {
    setSelectedCart(id);
    setSelectedRegionState(region);
    navigate("/selectedCarts");
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between px-4 mt-4">
        <h1 className="text-2xl font-bold">Featured Charts</h1>
        <p className="text-lg font-semibold text-[#c0bfbf] hover:text-white transform duration-300 ease-in-out cursor-pointer">
          Show all
        </p>
      </div>
      <div className="flex gap-2 px-2 mt-8 w-full justify-evenly ">
        {spotifyData.FeaturedCharts.map((FeaturedCharts, index) => (
          <div
            key={index}
            className="flex flex-col  w-[20%]  items-center  px-2 py-2 mb-4 text-white hover:bg-[#2c2b2b] transform duration-300 ease-in-out rounded-lg "
            onMouseEnter={() => setHoveredAlbum(FeaturedCharts.id)}
            onMouseLeave={() => setHoveredAlbum(null)}
            onClick={() =>
              clickHandler(FeaturedCharts.id, FeaturedCharts.region)
            }
          >
            <div className="">
              <div className="relative w-full">
                <div className="h-[15vw] w-[13vw] flex justify-center relative">
                  <img
                    src={FeaturedCharts.image}
                    alt="Uploaded"
                    className=" h-full w-full   rounded-md "
                  />
                </div>
                {hoveredAlbum === FeaturedCharts.id && (
                  <motion.div
                    className="absolute bottom-2 right-2 flex items-center justify-center  bg-opacity-95 transition-opacity  duration-300 text-2xl w-12 h-12 bg-green-600 rounded-full p-2 shadow-2xl "
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-black text-2xl"
                    />
                  </motion.div>
                )}
              </div>
              <div className="flex flex-col gap-1 items-start pl-2 pt-2">
                <h3 className="text-md font-semibold text-white">
                  {FeaturedCharts.chart}
                </h3>
                <p className="text-[#c0bfbf] text-base  line-clamp-2">
                  {FeaturedCharts.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
