import { atom } from "recoil";

export const deleteModalState = atom({
  key: "deleteModalState",
  default: { isOpen: false, songId: null },
});

export const editModalState = atom({
  key: "editModalState",
  default: { isOpen: false, song: null },
});
