import React from "react";
import SelectePlaylistSong from "./SelectePlaylistSong";
import { useRecoilState } from "recoil";
import { modalState, selectedPlaylistIdState } from "../Recoil/recoil";

export default function CreateLibraryBanner({ playlistInfo }) {
  const [, setIsModalOpen] = useRecoilState(modalState);

  const openModal = () => {
    try {
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error setting modal state:", error);
    }
  };
  return (
    <div>
      <div className="h-[35vh] flex items-center bg-gradient-to-b from-[#525252] via-[#3b3b3b] to-[#2e2e2e]">
        <div className="flex gap-5  px-8 items-center">
          <div className="w-[10vw] h-[10vw]  rounded-lg  shadow-xl">
            <img src="" alt="Selected artist image" className="w-full h-full" />
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
      <SelectePlaylistSong />
    </div>
  );
}
