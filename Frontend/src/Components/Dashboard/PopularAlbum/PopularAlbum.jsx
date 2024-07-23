import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { selectedAlbumState } from "../Recoil/recoil";
import { useNavigate } from "react-router-dom";
export default function PopularAlbum() {
  const [fetchedSongs, setFetchedSongs] = useState([]);
  const [hoveredAlbum, setHoveredAlbum] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useRecoilState(selectedAlbumState);
  const navigate = useNavigate();
  const fetchAlbums = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/v1/dashboard/songs"
    );
    const SlicedAlbulm = response.data.slice(0, 5);
    setFetchedSongs(SlicedAlbulm);
  };
  useEffect(() => {
    fetchAlbums();
  }, []);

  const clickHandle = (albumName) => {
    setSelectedAlbum(albumName);
    navigate("/selectedAlbum");
  };

  // const SingerName = fetchedSongs[4].singerName.split(" , ")[0]
  return (
    <div className="mt-10">
      <div className="flex justify-between px-4 mt-4">
        <h1 className="text-2xl font-bold">Populer Album</h1>
        <p className="text-lg font-semibold text-[#c0bfbf] hover:text-white transform duration-300 ease-in-out cursor-pointer">
          Show all
        </p>
      </div>
      <div className="flex gap-2 px-2 mt-8 w-full justify-evenly ">
        {fetchedSongs.map((song, index) => (
          <div
            key={index}
            className="flex flex-col  w-[20%]  items-center  px-2 py-2 mb-4 text-white hover:bg-[#2c2b2b] transform duration-300 ease-in-out rounded-lg "
            onMouseEnter={() => setHoveredAlbum(song.id)}
            onMouseLeave={() => setHoveredAlbum(null)}
            onClick={() => clickHandle(song.albumName)}
          >
            <div className="">
              <div className="relative w-full">
                <div className="h-[15vw] w-[13vw] relative">
                  <img
                    src={`http://localhost:3000/${song.image}`}
                    alt="Uploaded"
                    className=" h-full w-full object-cover rounded-md "
                  />
                </div>
                {hoveredAlbum === song.id && (
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
                <h3 className="text-lg font-semibold text-white">
                  {song.albumName}
                </h3>
                <p className="text-[#c0bfbf]">
                  {song.singerName.length > 1
                    ? song.singerName.split(" , ")[0]
                    : song.singerName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
