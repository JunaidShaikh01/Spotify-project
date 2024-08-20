import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";
import { currentSongState } from "../Recoil/recoil";
export default function SelectedPlaylistSongs({ fetchedSongs }) {
  const [currentSongs, setCurrentSongs] = useRecoilState(currentSongState);
  const songs = fetchedSongs;
  const handlePlaySong = (song) => {
    setCurrentSongs({
      url: `http://localhost:3000/${song.audio}`,
      id: song.id,
      name: song.name,
      image: `http://localhost:3000/${song.image}`,
      singerName: song.singerName,
      albumName: song.albumName,
    });
  };

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
              onClick={() => handlePlaySong(song)}
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

      {/* {currentSongs && (
        <div className="music-player fixed bottom-0 left-0 right-0 p-4 bg-black">
          <ReactPlayer
            url={currentSongs}
            playing
            controls
            width="100%"
            height="50px"
            style={{ zIndex: 1000 }}
            onProgress={({ duration, playedSeconds }) => {
              console.log("Duration: ", duration);
              console.log("Played seconds: ", playedSeconds);
            }}
          />
        </div>
      )} */}
    </div>
  );
}
