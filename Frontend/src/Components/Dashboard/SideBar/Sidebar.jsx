import React, { useEffect, useState } from "react";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faHome,
  faMusic,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreatePlaylist from "./CreatePlaylist";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  fetchedPlaylistState,
  selectedPlaylistIdState,
} from "../Recoil/recoil";

export default function ({ data }) {
  const [response, setResponse] = useState([]);
  const [, setSelectedPlaylistId] = useRecoilState(selectedPlaylistIdState);
  const [playListState] = useRecoilState(fetchedPlaylistState);

  // const dataFatched = data;
  useEffect(() => {
    const fetchPlaylist = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return null;
      }
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/dashboard/playlists",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setResponse(data.playlists);
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    };

    fetchPlaylist();
  }, [playListState]);

  const navigate = useNavigate();
  const handlePlaylistClick = (playlistId) => {
    setSelectedPlaylistId(playlistId);
    navigate(`/library/${playlistId}`);
  };

  return (
    <div className="flex flex-col h-full w-[24vw] gap-2 ">
      <div className="bg-[#121212] rounded-lg text-white h-[25vh] p-8 text-xl flex flex-col gap-4 justify-center">
        <div
          className="flex s items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FontAwesomeIcon icon={faSpotify} />
          Spotify
        </div>
        <div
          className="flex gap-4 items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </div>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faSearch} />
          <p>Search</p>
        </div>
      </div>
      <div className="bg-[#121212] text-white h-[70vh] rounded-lg px-2 flex flex-col">
        <div
          className="w-full items-end flex justify-between py-4 cursor-pointer"
          onClick={() => navigate("/library")}
        >
          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon icon={faDatabase} />

            <p>Your Library</p>
          </div>
          <FontAwesomeIcon
            icon={faPlus}
            className="hover:scale-150 text-gray-300 hover:text-white duration-200 ease-out transform"
          />
        </div>

        {!data ? (
          <CreatePlaylist />
        ) : response.length > 0 ? (
          response.map((playlist, index) => (
            <div
              key={index}
              className="flex items-center w-full bg-[#333333] rounded-lg gap-4 text-white mt-4 px-4 py-2 group "
              onClick={() => handlePlaylistClick(playlist.id)}
            >
              <div className="w-[40%] h-full flex items-center justify-center  hover:bg-[#201f1f]  group-hover:bg-[#303030] hover:shadow-xl transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faMusic}
                  className="font-thin text-lg "
                />
              </div>
              <div className="w-full flex flex-col cursor-pointer">
                <p>{playlist.name}</p>
                <div className="text-[#a5a5a5] flex gap-2">
                  <p>playlist</p>
                  <p>{playlist.id}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <CreatePlaylist />
        )}
      </div>
    </div>
  );
}
