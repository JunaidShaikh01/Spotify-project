import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedArtistState } from "../Recoil/recoil";

export default function SelectedArtistSongs() {
  const [songs, setSongs] = useState([]);

  const [selectedArtist] = useRecoilState(selectedArtistState);
  const fetchSongs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/dashboard/songs"
      );
      setSongs(response.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, [selectedArtist]);

  const selectedArtistSong = songs.filter(
    (song) => song.singerName === selectedArtist
  );

  const generateRandomNumberWithCommas = () => {
    const randomNumber = Math.floor(Math.random() * 900000000) + 100000; // ensures a 6-digit number
    return randomNumber.toLocaleString();
  };

  return (
    <div className="px-8 py-8">
      {selectedArtistSong.length === 0 ? (
        <p className="text-white">No songs found for this artist.</p>
      ) : (
        <div className="songsSection">
          {selectedArtistSong.map((song, index) => (
            <div
              className="songCard  text-white flex gap-2  mb-2"
              key={song.id}
            >
              <div className="col flex-grow-[10] basis-0">
                <span>{index + 1}</span>
              </div>

              <div className="col flex-grow-[30] basis-0 ">
                <img
                  src={`http://localhost:3000/${song.image}`}
                  alt="Uploaded"
                  className="w-12 h-12 object-cover rounded-md"
                />
              </div>
              <div className="col flex-grow-[400] basis-0 ">
                <span>{song.name}</span>
              </div>
              <div className="col flex-grow-[200] basis-0 ">
                <span>{generateRandomNumberWithCommas()}</span>
              </div>

              <div className="col flex-grow-[30] basis-0 ">
                <span>{song.duration}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
