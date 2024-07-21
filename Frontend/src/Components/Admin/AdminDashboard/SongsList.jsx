import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import style from "./SongList.module.css";

export default function SongsList({
  songs,
  setDeleteModalState,
  setEditModalState,
}) {
  const [hoveredButton, setHoveredButton] = useState(null);
  const handleDeleteClick = (songId) => {
    setDeleteModalState({ isOpen: true, songId });
    // console.log("Song Id", songId);
  };

  const handleEditClick = (song) => {
    setEditModalState({ isOpen: true, song });
    console.log("Song", song);
  };
  if (!Array.isArray(songs)) {
    return <div className="text-white">No songs available</div>;
  }
  return (
    <div className={`h-[71vh] overflow-y-auto mt-4 ${style.custom_scrollbar}`}>
      <div className="pr-8">
        <ul className="text-white mt-4 ">
          {songs.map((song) => (
            <li
              key={song.id}
              className="flex gap-4 mb-6 justify-between items-center border-b border-black pb-7 "
            >
              <img
                src={`http://localhost:3000/${song.image}`}
                alt="Uploaded"
                className="w-24 h-30 object-cover"
              />
              <div className="flex flex-col flex-grow">
                <div className="flex gap-4">
                  <div className="flex flex-col  ">
                    <p className="mb-2">
                      <span className="text-[#1E1E] font-semibold">Name:</span>{" "}
                      {song.name}
                    </p>
                    <p className="mb-2">
                      <span className="text-[#1E1E] font-semibold">
                        Singer:
                      </span>{" "}
                      {song.singerName}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-2">
                      <span className="text-[#1E1E] font-semibold">
                        Language:
                      </span>{" "}
                      {song.language}
                    </p>
                    <p className="mb-2">
                      <span className="text-[#1E1E] font-semibold">
                        Category:
                      </span>{" "}
                      {song.category}
                    </p>
                  </div>
                </div>
                <p>
                  <span className="text-[#1E1E] font-semibold">Album:</span>{" "}
                  {song.albumName}
                </p>
                <div className="mt-2">
                  <audio controls className={`w-[90%] ${style.custom_audio}`}>
                    <source
                      src={`http://localhost:3000/${song.audio}`}
                      type="audio/mpeg"
                    />
                  </audio>
                </div>
              </div>
              <div className="flex h-8 justify-between gap-8">
                <button
                  className="bg-transparent border rounded px-4 font-semibold cursor-pointer hover:bg-red-500 transform ease-in-out duration-500 flex items-center gap-2"
                  onMouseEnter={() => setHoveredButton("delete-" + song.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => handleDeleteClick(song.id)}
                >
                  Delete
                  {hoveredButton === "delete-" + song.id && (
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="transition-opacity duration-300 opacity-100"
                    />
                  )}
                </button>
                <button
                  className="bg-transparent border rounded px-4 font-semibold cursor-pointer hover:bg-yellow-500 transform ease-in-out duration-500 flex items-center gap-2"
                  onMouseEnter={() => setHoveredButton("edit-" + song.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => handleEditClick(song)}
                >
                  Edit
                  {hoveredButton === "edit-" + song.id && (
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="transition-opacity duration-300 opacity-100"
                    />
                  )}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
