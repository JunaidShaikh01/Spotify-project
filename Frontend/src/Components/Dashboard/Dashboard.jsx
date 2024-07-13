import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faHome,
  faPlay,
  faPlus,
  faSearch,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header/Header";
import ArRehmann from "../../Pitchers/Ar Rehman banner.jpg";
import ArijitSingh from "../../Pitchers/Arijit Singh banner.jpeg";
import nusratFetehAliKhan from "../../Pitchers/nusrat fateh ali khan banner.jpg";
import Shubh from "../../Pitchers/Shubh Banner.jpg";
import SidhuMoseWala from "../../Pitchers/Sidhu moose wala banner.jpeg";
import { useRecoilState } from "recoil";
import { selectedArtistState } from "./Recoil/recoil";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";

const artists = [
  {
    image: ArRehmann,
    artist: "A.R.Rehman",
  },
  {
    image: ArijitSingh,
    artist: "Arijit Singh",
  },
  {
    image: nusratFetehAliKhan,
    artist: "Nusrat Feteh Ali Khan",
  },
  {
    image: Shubh,
    artist: "Shubh",
  },
  {
    image: SidhuMoseWala,
    artist: "Sidhu Moose Wala",
  },
];
export default function Dashboard() {
  const [selectedArtist, setSelectedArtist] =
    useRecoilState(selectedArtistState);
  const [hoveredArtist, setHoveredArtist] = useState(null);
  const navigate = useNavigate();
  const handleClick = (artist) => {
    setSelectedArtist(artist);
    navigate("/selectedArtist");
  };
  console.log("Artist selected", selectedArtist);
  return (
    <div className="bg-black h-screen w-screen">
      <div className="flex h-full w-full gap-2 p-2">
        <Sidebar />
        <div className="bg-[#121212] rounded-lg text-white w-full h-full ">
          <Header />
          <div className="">
            <div className="bg-gradient-to-b from-[#2c2b2b] to-[#121212] pt-1">
              <div className="flex justify-between px-4 mt-4">
                <h1 className="text-2xl font-bold">Populer Artist</h1>
                <p className="text-lg font-semibold">Show all</p>
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
                        <div className="absolute bottom-0 right-0 flex items-center justify-center  bg-opacity-95 transition-opacity  duration-300 text-2xl w-16 h-16 bg-green-600 rounded-full p-2 ">
                          <FontAwesomeIcon
                            icon={faPlay}
                            className="text-black text-2xl"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 items-start pb-2">
                      <p>{artist.artist}</p>
                      <p>Artist</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
