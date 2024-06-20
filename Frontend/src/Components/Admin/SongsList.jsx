import React from "react";

export default function SongsList({ songs }) {
  return (
    <div>
      <h2>Songs List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <p>Name: {song.name}</p>
            <p>Singer: {song.singer}</p>
            <p>Language: {song.language}</p>
            <p>Category: {song.category}</p>
            <img
              src={`http://localhost:5000${song.image}`}
              alt={song.name}
              width="100"
            />
            <audio controls>
              <source
                src={`http://localhost:5000${song.song}`}
                type="audio/mpeg"
              />
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}
