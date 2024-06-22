import React from "react";
import { useRecoilState } from "recoil";
import { editModalState } from "./recoilState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function EditModal() {
  const [modelSate, setModelState] = useRecoilState(editModalState);

  const handleClose = () => {
    setModelState({ isOpen: false, song: null });
    // console.log("Handle close is clicked");
  };

  //   const handleEdit = () => {
  //     handleClose();
  //   };

  const handleSubmit = () => {
    handleClose();
  };
  if (!modelSate.isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* <div className="fixes inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"> */}
      <div className="bg-black text-white p-8 rounded-lg w-[90%] md:w-[50%] lg:w-[40%] shadow-lg">
        <div className="flex  items-center justify-between">
          <h2 className="text-2xl mb-4">Edit Song</h2>
          <FontAwesomeIcon
            icon={faX}
            onClick={handleClose}
            className="text-2xl mb-4"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Name of Song"
            name="name"
            //   value={formData.name}
            //   onChange={handleChange}
            className="p-2 border rounded col-span-2 bg-transparent"
          />
          <input
            type="text"
            placeholder="Album Name"
            name="albumName"
            //   value={formData.albumName}
            //   onChange={handleChange}
            className="p-2 border rounded bg-transparent"
          />
          <input
            type="text"
            placeholder="Singer Name"
            name="singerName"
            //   value={formData.singerName}
            //   onChange={handleChange}
            className="p-2 border rounded bg-transparent"
          />
          <input
            type="text"
            placeholder="Language"
            name="language"
            //   value={formData.language}
            //   onChange={handleChange}
            className="p-2 border rounded bg-transparent"
          />
          <input
            type="text"
            placeholder="Category"
            name="category"
            //   value={formData.category}
            //   onChange={handleChange}
            className="p-2 border rounded bg-transparent"
          />
          <button
            type="submit"
            className="bg-[#1fdf64] text-black font-semibold text-2xl py-2 rounded-lg col-span-2"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
