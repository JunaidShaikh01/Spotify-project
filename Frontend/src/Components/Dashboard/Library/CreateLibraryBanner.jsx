import React, { useState } from "react";
import SelectePlaylistSong from "./SelectePlaylistSong";
import { useRecoilState } from "recoil";
import { modalState } from "../Recoil/recoil";

export default function CreateLibraryBanner({ playlistInfo }) {
  const [, setIsModalOpen] = useRecoilState(modalState);
  const [playlistImages, setPlaylistImages] = useState([]);
  const openModal = () => {
    try {
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error setting modal state:", error);
    }
  };
  console.log("Fetched Playlist Images", playlistImages);

  const handleFetchedImages = (images) => {
    setPlaylistImages(images);
  };
  return (
    <div>
      <div className="h-[35vh] flex items-center bg-gradient-to-b from-[#525252] via-[#3b3b3b] to-[#2e2e2e]">
        <div className="flex gap-5  px-8 items-center">
          <div className="w-[10vw] h-[10vw]  rounded-lg  shadow-xl flex flex-col">
            <div className=" h-[50%] flex ">
              <img
                src={`http://localhost:3000/${playlistImages[0]}`}
                alt="image"
                className="w-full h-full flex rounded-tl-lg"
              />
              <img
                src={`http://localhost:3000/${playlistImages[1]}`}
                alt="image"
                className="w-full h-full flex rounded-tr-lg"
              />
            </div>
            <div className=" h-[50%]  flex">
              <img
                src={`http://localhost:3000/${playlistImages[2]}`}
                alt="image"
                className="w-full h-full rounded-bl-lg"
              />
              <img
                src={`http://localhost:3000/${playlistImages[3]}`}
                alt=" image"
                className="w-full h-full rounded-br-lg"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1
              className="text-white text-[5rem] drop-shadow-xl font-extrabold cursor-pointer"
              onClick={openModal}
            >
              {playlistInfo ? playlistInfo.name : "Playlist Name "}
            </h1>
            <p className="text-white text-lg">40,373,319 monthly listeners</p>
          </div>
        </div>
      </div>
      <SelectePlaylistSong onFetchedImages={handleFetchedImages} />
    </div>
  );
}
