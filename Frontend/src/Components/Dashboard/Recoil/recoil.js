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
