import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SelectPlaylistSongList() {
  const [fetchedSongs, setFetchedSongs] = useState([]);
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

  return (
    <div>
      <h1 className="text-xl font-bold">Recommended</h1>
      <div className="w-full max-h-[55vh] overflow-auto px-2 mt-4">
        {fetchedSongs.length === 0 ? (
          <p className="text-white">No songs found</p>
        ) : (
          <div className="songsSection  items-center  ">
            {fetchedSongs.map((song, index) => (
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
        )}
      </div>
    </div>
  );
}
