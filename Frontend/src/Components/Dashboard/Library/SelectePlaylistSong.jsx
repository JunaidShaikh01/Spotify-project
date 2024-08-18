import React, { useEffect, useState } from "react";
import {
  faEllipsis,
  faList,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectPlaylistSongList from "./SelectPlaylistSongList";
import { useRecoilState } from "recoil";
import { playlistSongState, selectedPlaylistIdState } from "../Recoil/recoil";
import axios from "axios";

export default function SelectePlaylistSong() {
  const [selectedPlaylistId] = useRecoilState(selectedPlaylistIdState);
  const [fetchPlaylistSong] = useRecoilState(playlistSongState);
  const [isOpen, setIsopen] = useState(false);
  const [isOpenSongList, setIsOpenSongList] = useState(false);
  const [fetchedSongs, setFetchedSongs] = useState([]);
  console.log("Response received", fetchedSongs);
  console.log("isOpenSongList", isOpenSongList);
  console.log("fetchPlaylistSong", fetchPlaylistSong);

  useEffect(() => {
    console.log("Inside useeffect");

    const fetchSongs = async () => {
      console.log("inside fetch songs");

      try {
        console.log("inside fetch try");
        const response = await axios.get(
          "http://localhost:3000/api/v1/dashboard/playlistSongs",
          {
            params: { playlistId: 1 }, // Send playlistId as query param
          }
        );
        console.log("Response data from api ", response.data);
        setFetchedSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs", error);
      }
    };
    fetchSongs();
  }, [fetchPlaylistSong, selectedPlaylistId]); // Fetch songs when selectedPlaylistId changes

  return (
    <div className="bg-gradient-to-b from-[#1d1d1d] via-[#121212] to-[#121212] px-4">
      <div className="w-full flex justify-between items-center pt-8">
        <FontAwesomeIcon
          icon={faEllipsis}
          onClick={() => setIsopen(false)}
          className="hover:text-white text-[#b2b2b2] hover:scale-110 transform duration-300 ease-in-out"
        />
        <div
          className=" flex items-center gap-2"
          onClick={() => setIsOpenSongList(false)}
        >
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

      {!isOpenSongList ? (
        <div className="songsSection  items-center  ">
          {fetchedSongs.map((song) => (
            <div
              className="songCard  text-white flex gap-2  mb-2 items-center"
              key={song.id}
            >
              <div className="  flex-grow-[150] basis-0 mb-2 ">
                <div className="flex gap-4">
                  <img
                    src={`http://localhost:3000/${song.image}`}
                    alt="Song Image"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <div>{song.name}</div>
                    <div className="text-[#b2b2b2]">{song.singerName}</div>
                  </div>
                </div>
              </div>
              <div className="col flex-grow-[80] basis-0 ">
                <span>{song.albumName}</span>
              </div>
              <div className="col flex-grow-[20]  basis-0  mr-2">
                <p className="border border-white text-center  rounded-full hover:scale-105 cursor-pointer">
                  Add
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <SelectPlaylistSongList />
    </div>
  );
}
