import {
  faEllipsis,
  faList,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SelectPlaylistSongList from "./SelectPlaylistSongList";

export default function SelectePlaylistSong() {
  return (
    <div className="bg-gradient-to-b from-[#1d1d1d] via-[#121212] to-[#121212] px-4">
      <div className="w-full flex justify-between items-center pt-8">
        <FontAwesomeIcon icon={faEllipsis} className="text-xl" />
        <div className=" flex items-center gap-2">
          <p>List</p>
          <FontAwesomeIcon icon={faList} />
        </div>
      </div>
      <div className="flex w-full justify-between items-center mt-4 border-t border-stone-700 mb-2 ">
        <div className="mt-2">
          <p className="text-2xl font-semibold mb-4">
            Let's find something for your playlist
          </p>
          <div className="searchSongs bg-[#2c2c2c] flex gap-4 rounded-lg items-center py-3 px-4">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              placeholder="Search songs for your playlist..."
              className="bg-transparent w-[80%] focus:outline-none"
            />
          </div>
        </div>
        <FontAwesomeIcon icon={faX} />
      </div>
      <SelectPlaylistSongList />
    </div>
  );
}
