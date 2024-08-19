import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { playlistSongState, selectedPlaylistIdState } from "../Recoil/recoil";

export default function SelectPlaylistSongList() {
  const [fetchedSongs, setFetchedSongs] = useState([]);
  const [selectedPlaylistId] = useRecoilState(selectedPlaylistIdState);
  const [fetchPlaylistSong, setFetchPlaylistSong] =
    useRecoilState(playlistSongState);
  const id = selectedPlaylistId;

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/dashboard/songs"
        );
        setFetchedSongs(response.data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };

    fetchSongs();
  }, []);

  const addClickHandler = async (songId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }

    try {
      await axios.post(
        `http://localhost:3000/api/v1/dashboard/playlist/${id}/add-song`,
        {
          songId: songId,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      setFetchPlaylistSong(!fetchPlaylistSong);
    } catch (error) {
      console.error("Error adding song to playlist", error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Recommended</h1>
      <div className="w-full max-h-[55vh] overflow-auto px-2 mt-4">
        {fetchedSongs.length === 0 ? (
          <p className="text-white">No songs found</p>
        ) : (
          <div className="songsSection  items-center  ">
            {fetchedSongs.map((song) => (
              <div
                className="songCard  text-white flex gap-2  mb-2 items-center"
                key={song.id}
              >
                <div className="  flex-grow-[100] basis-0 mb-2 ">
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
                  <p
                    className="border border-white text-center  rounded-full hover:scale-105 cursor-pointer"
                    onClick={() => addClickHandler(song.id)}
                  >
                    Add
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
