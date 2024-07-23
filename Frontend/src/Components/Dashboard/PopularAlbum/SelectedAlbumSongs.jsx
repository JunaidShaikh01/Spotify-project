import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SelectedAlbumSongs({ songs }) {
  console.log("Songs", songs);
  return (
    <div className="px-8 py-8 w-full">
      {songs.length === 0 ? (
        <p className="text-white">No songs found for this artist.</p>
      ) : (
        <div className="songsSection  items-center  ">
          <div className=" text-white flex gap-2  mb-2 items-center">
            <div className="col flex-grow-[10] basis-0">
              <span>#</span>
            </div>
            <div className="col flex-grow-[400] basis-0">
              <span>Songs</span>
            </div>
            <div className="col flex-grow-[30] basis-0 ">
              <FontAwesomeIcon icon={faClock} />
            </div>
          </div>
          {songs.map((song, index) => (
            <div
              className="songCard  text-white flex gap-2  mb-2 items-center cursor-pointer"
              key={song.id}
            >
              <div className="col flex-grow-[10] basis-0">
                <span>{index + 1}</span>
              </div>

              <div className="col flex-grow-[400] basis-0 ">
                <div>{song.name}</div>
                <div className="text-[#b2b2b2]">{song.singerName}</div>
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
