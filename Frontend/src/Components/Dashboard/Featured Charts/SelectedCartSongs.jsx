import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { selectedCertState, selectedRegionState } from "../Recoil/recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
export default function SelectedCartSongs() {
  const [songs, setSongs] = useState([]);
  const [selectedCart] = useRecoilState(selectedCertState);
  const [selectedRegion] = useRecoilState(selectedRegionState);

  useEffect(() => {
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
    fetchSongs();
  }, [selectedCart]);

  const filteredSongs = songs.filter((song) => song.Region === selectedRegion);

  return (
    <div className="px-8 py-8 w-full ">
      {songs.length === 0 ? (
        <p className="text-white">No songs found for this artist.</p>
      ) : (
        <div className="songsSection  items-center  ">
          <div className=" text-white flex gap-2  mb-2 items-center">
            <div className="col flex-grow-[10] basis-0">
              <span>#</span>
            </div>
            <div className="col flex-grow-[200] basis-0">
              <span>Songs</span>
            </div>
            <div className="col flex-grow-[50] basis-0">
              <span>Plays</span>
            </div>
            <div className="col flex-grow-[50] basis-0">
              <span>Album</span>
            </div>
            <div className="col flex-grow-[30] basis-0 ">
              <FontAwesomeIcon icon={faClock} />
            </div>
          </div>
          {filteredSongs.map((song, index) => (
            <div
              className="songCard   text-white flex gap-2  mb-2 items-center cursor-pointer"
              key={song.id}
            >
              <div className="col flex-grow-[10] basis-0">
                <span>{index + 1}</span>
              </div>

              <div className="col flex-grow-[200] basis-0 ">
                <div>{song.name}</div>
                <div className="text-[#b2b2b2]">{song.singerName}</div>
              </div>

              <div className="col flex-grow-[50]  basis-0 ">
                <span>{song.duration}</span>
              </div>
              <div className="col flex-grow-[50] basis-0 ">
                <span>{song.duration}</span>
              </div>
              <div className="col flex-grow-[30]  basis-0 ">
                <span>{song.duration}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
