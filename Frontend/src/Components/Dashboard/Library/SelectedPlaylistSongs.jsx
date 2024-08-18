import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function SelectedPlaylistSongs({ fetchedSongs }) {
  const songs = fetchedSongs;
  console.log("Sonngs in Slected playlist ", songs);

  return (
    <div>
      {songs.length === 0 ? (
        <p className="text-white">No songs in this playlist.</p>
      ) : (
        <div className="songsSection  items-center mt-4  ">
          <div className=" text-white flex gap-2  mb-2 items-center">
            <div className="col flex-grow-[20] basis-0">
              <span>#</span>
            </div>
            <div className="col flex-grow-[300] basis-0">
              <span>Title</span>
            </div>
            <div className="col flex-grow-[300] basis-0">
              <span>Album</span>
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
              <div className="col flex-grow-[20] basis-0">
                <span>{index + 1}</span>
              </div>

              <div className="flex gap-4 flex-grow-[300] basis-0 ">
                <div>
                  <img
                    src={`http://localhost:3000/${song.image}`}
                    alt="Song Image"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </div>
                <div>
                  <div>{song.name}</div>
                  <div className="text-[#b2b2b2]">{song.singerName}</div>
                </div>
              </div>
              <div className="col flex-grow-[300] basis-0 ">
                <div>{song.albumName}</div>
              </div>
              <div className="col flex-grow-[30] basis-0 ">
                {song.duration ? <span>{song.duration}</span> : <span>--</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
