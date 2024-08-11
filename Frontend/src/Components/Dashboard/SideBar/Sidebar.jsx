import React, { useEffect, useState } from "react";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faHome,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreatePlaylist from "./CreatePlaylist";
import axios from "axios";

export default function ({ data }) {
  const [response, setResponse] = useState([]);
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
  }, []);

  return (
    <div className="flex flex-col h-full w-[24vw] gap-2 ">
      <div className="bg-[#121212] rounded-lg text-white h-[25vh] p-8 text-xl flex flex-col gap-4 justify-center">
        <div className="flex s items-center">
          <FontAwesomeIcon icon={faSpotify} />
          Spotify
        </div>
        <div className="flex gap-4 items-center ">
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </div>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faSearch} />
          <p>Search</p>
        </div>
      </div>
      {!data ? (
        <div className="bg-[#121212] text-white h-[70vh] rounded-lg px-2 flex flex-col">
          <div className="w-full items-end flex justify-between py-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faDatabase} />
              <p>Your Library</p>
            </div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <CreatePlaylist />
        </div>
      ) : response.length > 0 ? (
        response.map((playlist, index) => (
          <div
            key={index}
            className="flex gap-4 items-center py-x bg-[#121212] text-white "
          >
            <p>{playlist.name}</p>
            <div></div>
          </div>
        ))
      ) : (
        <div className="bg-[#121212] text-white h-[70vh] rounded-lg px-2 flex flex-col">
          <div className="w-full items-end flex justify-between py-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faDatabase} />
              <p>Your Library</p>
            </div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <CreatePlaylist />
        </div>
      )}
    </div>
  );
}
