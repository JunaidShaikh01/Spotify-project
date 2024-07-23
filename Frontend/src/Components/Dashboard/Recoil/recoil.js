import { atom } from "recoil";

export const selectedArtistState = atom({
  key: "selectedArtistState",
  default: null,
});

export const selectedAlbumState = atom({
  key: "selectedAlbumState",
  default: null,
});
