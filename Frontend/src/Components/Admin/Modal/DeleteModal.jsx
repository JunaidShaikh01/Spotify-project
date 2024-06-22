import React from "react";
import { useRecoilState } from "recoil";
import { deleteModalState } from "./recoilState";

export default function DeleteModal() {
  const [modelSate, setModelSate] = useRecoilState(deleteModalState);
  const handleClose = () => {
    setModelSate({ isOpen: false, songId: null });
  };
  const handleDelete = () => {
    handleClose();
  };

  if (!modelSate.isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black text-white p-8 rounded-lg w-[90%] md:w-[50%] lg:w-[40%] shadow-lg">
        <h2 className="text-2xl mb-4">
          Are you sure you want to delete this song
        </h2>
        <div className="flex justify-end gap-4">
          <button
            className="bg-red-600 px-4 py-2 rounded-lg "
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="bg-gray-600 px-4 py-2 rounded-lg "
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
