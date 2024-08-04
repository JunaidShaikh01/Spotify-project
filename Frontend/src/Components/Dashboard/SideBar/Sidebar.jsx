import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faHome,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CreatePlaylist from "./CreatePlaylist";

export default function () {
  return (
    <div className="flex flex-col h-full w-[24vw] gap-2 ">
      <div className="bg-[#121212] rounded-lg text-white h-[25vh] p-8 text-xl flex flex-col gap-4 justify-center">
        <div className="flex s items-center">
          <FontAwesomeIcon icon={faSpotify} />
          Spotify
        </div>
        <div className="flex gap-4 items-center ">
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </div>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faSearch} />
          <p>Search</p>
        </div>
      </div>
      <div className="bg-[#121212] text-white h-[70vh] rounded-lg px-2 flex flex-col">
        <div className="w-full items-end flex justify-between py-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faDatabase} />
            <p>Your Library</p>
          </div>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <CreatePlaylist />
      </div>
    </div>
  );
}
