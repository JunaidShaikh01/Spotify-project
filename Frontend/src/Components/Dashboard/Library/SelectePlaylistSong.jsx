import React, { useState } from "react";
import {
  faEllipsis,
  faList,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectPlaylistSongList from "./SelectPlaylistSongList";

export default function SelectePlaylistSong() {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="bg-gradient-to-b from-[#1d1d1d] via-[#121212] to-[#121212] px-4">
      <div className="w-full flex justify-between items-center pt-8">
        <FontAwesomeIcon
          icon={faEllipsis}
          onClick={() => setIsopen(false)}
          className="hover:text-white text-[#b2b2b2] hover:scale-110 transform duration-300 ease-in-out"
        />
        <div className=" flex items-center gap-2">
          <p>List</p>
          <FontAwesomeIcon icon={faList} />
        </div>
      </div>

      {!isOpen ? (
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
          <FontAwesomeIcon
            icon={faX}
            onClick={() => setIsopen(true)}
            className="hover:text-white text-[#b2b2b2] hover:scale-110 transform duration-300 ease-in-out"
          />
        </div>
      ) : (
        ""
      )}
      <SelectPlaylistSongList />
    </div>
  );
}
