import React, { useEffect, useState } from "react";
import { selectedRedioState } from "../Recoil/recoil";
import { useRecoilState } from "recoil";
import spotifyData from "../Data/ArtistData";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
export default function SelectedRedioSong({ Redio }) {
  const [songs, setSongs] = useState([]);
  const [selectedRedio] = useRecoilState(selectedRedioState);
  console.log("SelectedRedio", selectedRedio);
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
  }, [selectedRedio]);

  console.log("Songs", songs);

  const selectedArtists = spotifyData.Redio.find(
    (artist) => artist.id === selectedRedio
  );

  const selectedRedioArtists = selectedArtists.Artists.split(" , ");

  selectedRedioArtists.push(Redio);

  const filteredSongs = songs.filter((song) =>
    selectedRedioArtists.includes(song.singerName)
  );

  return (
    <div className="px-8 py-8 w-full h-[52vh] overflow-auto">
      {songs.length === 0 ? (
        <p className="text-white">No songs found for this artist.</p>
      ) : (
        <div className="songsSection  items-center  h-full ">
          <div className=" text-white flex gap-2  mb-2 items-center">
            <div className="col flex-grow-[10] basis-0">
              <span>#</span>
            </div>
            <div className="col flex-grow-[150] basis-0">
              <span>Title</span>
            </div>

            <div className="col flex-grow-[80] basis-0">
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
