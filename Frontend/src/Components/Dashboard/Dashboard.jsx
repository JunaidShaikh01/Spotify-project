import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faHome,
  faPlus,
  faSearch,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header/Header";
export default function Dashboard() {
  return (
    <div className="bg-black h-screen w-screen">
      <div className="flex h-full w-full gap-2 p-2">
        <div className="flex flex-col h-full w-[30vw] gap-2">
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
          <div className="bg-[#121212] text-white h-[70vh] rounded-lg">
            <div>
              <div>
                <FontAwesomeIcon icon={faDatabase} />
                <p>Your Library</p>
              </div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
        <div className="bg-[#121212] rounded-lg text-white w-full h-full ">
          <Header />
          <div className="">
            <div>
              <div className="flex justify-between px-4">
                <h1 className="text-2xl font-bold">Populer Artist</h1>
                <p className="text-lg font-semibold">Show all</p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
