import React, { useEffect, useState } from "react";
import {
  faEllipsis,
  faList,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { playlistSongState, selectedPlaylistIdState } from "../Recoil/recoil";
import axios from "axios";
import SelectPlaylistSongList from "./SelectPlaylistSongList";
import SelectedPlaylistSongs from "./SelectedPlaylistSongs";

export default function SelectePlaylistSong({ onFetchedImages }) {
  const [selectedPlaylistId] = useRecoilState(selectedPlaylistIdState);
  const [fetchPlaylistSong] = useRecoilState(playlistSongState);
  const [fetchedSongs, setFetchedSongs] = useState([]);
  const [isOpen, setIsopen] = useState(false);
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        console.log("inside fetch try");
        const response = await axios.get(
          "http://localhost:3000/api/v1/dashboard/playlistSongs",
          {
            params: { playlistId: selectedPlaylistId },
          }
        );
        const images = response.data.map((song) => song.image);
        onFetchedImages(images);
        setFetchedSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs", error);
      }
    };
    fetchSongs();
  }, [fetchPlaylistSong, selectedPlaylistId]);
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
      <SelectedPlaylistSongs fetchedSongs={fetchedSongs} />
      <div className=" border-t border-stone-700 mb-4"></div>
      {!isOpen ? (
        <div className="flex w-full justify-between items-center mt-4 mb-2 ">
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
