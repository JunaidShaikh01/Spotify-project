import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import artists from "../Data/ArtistData";
import { useRecoilState } from "recoil";
import { selectedArtistState } from "../Recoil/recoil";
import { useNavigate } from "react-router-dom";
export default function Artist() {
  const [selectedArtist, setSelectedArtist] =
    useRecoilState(selectedArtistState);
  const [hoveredArtist, setHoveredArtist] = useState(null);
  const navigate = useNavigate();
  const handleClick = (artist) => {
    setSelectedArtist(artist);
    navigate("/selectedArtist");
  };
  return (
    <div className="">
      <div className="bg-gradient-to-b from-[#2c2b2b] to-[#121212] pt-1">
        <div className="flex justify-between px-4 mt-4">
          <h1 className="text-2xl font-bold">Populer Artist</h1>
          <p className="text-lg font-semibold text-[#c0bfbf]  hover:text-white transform duration-300 ease-in-out cursor-pointer">
            Show all
          </p>
        </div>
        <div className="flex w-full mt-8 px-2">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="flex flex-col gap-4  items-center w-[20%] rounded-lg hover:bg-[#2c2b2b] transform duration-300 ease-in-out "
              onMouseEnter={() => setHoveredArtist(artist.artist)}
              onMouseLeave={() => setHoveredArtist(null)}
              onClick={() => handleClick(artist.artist)}
            >
              <div className="w-[13vw] h-[13vw] pt-2 relative">
                <img
                  src={artist.image}
                  alt={artist.artist}
                  className="w-full h-full rounded-full shadow-2xl object-cover"
                />
                {hoveredArtist === artist.artist && (
                  <motion.div
                    className="absolute bottom-0 right-0 flex items-center justify-center  bg-opacity-95 transition-opacity  duration-300 text-2xl w-16 h-16 bg-green-600 rounded-full p-2 "
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
              <div className="flex flex-col gap-2 items-start pb-2">
                <p>{artist.artist}</p>
                <p className="text-[#c0bfbf]">Artist</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}