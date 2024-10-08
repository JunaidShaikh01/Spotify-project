import { atom } from "recoil";

export const selectedArtistState = atom({
  key: "selectedArtistState",
  default: null,
});

export const selectedAlbumState = atom({
  key: "selectedAlbumState",
  default: null,
});

export const selectedCertState = atom({
  key: "selectedCertState",
  default: null,
});

export const selectedRedioState = atom({
  key: "selectedRedioState",
  default: null,
});

export const selectedRegionState = atom({
  key: "selectedRegionState",
  default: null,
});

export const formDataState = atom({
  key: "formDataState",
  default: {
    email: "",
    password: "",
    name: "",
    year: "",
    month: "",
    day: "",
    gender: "",
  },
});

export const userDataState = atom({
  key: "userDataState",
  default: null,
});

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const selectedPlaylistIdState = atom({
  key: "selectedPlaylistId",
  default: null,
});

export const dateFetchState = atom({
  key: "dateFetchState",
  default: null,
});

export const fetchedPlaylistState = atom({
  key: "fetchedPlaylistState",
  default: false,
});

export const playlistSongState = atom({
  key: "playlistSongState",
  default: false,
});

export const currentSongState = atom({
  key: "currentSongState",
  default: null,
});
