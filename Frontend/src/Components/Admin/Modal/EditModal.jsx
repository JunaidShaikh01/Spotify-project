import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { editModalState } from "./recoilState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function EditModal() {
  const [modelSate, setModelState] = useRecoilState(editModalState);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    albumName: "",
    singerName: "",
    language: "",
    category: "",
  });
  console.log("Modal state", modelSate);
  useEffect(() => {
    if (modelSate.song) {
      setFormData({
        id: modelSate.song.id,
        name: modelSate.song.name,
        albumName: modelSate.song.albumName,
        singerName: modelSate.song.singerName,
        language: modelSate.song.language,
        category: modelSate.song.category,
      });
    }
  }, [modelSate.song]);

  const handleClose = () => {
    setModelState({ isOpen: false, song: null });
  };

  // const handleChange = () => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3000/api/v1/admin/update",
        formData
      );

      if (response.status === 200) {
        const data = response.data;
        console.log("Data", data);
        handleClose();
      } else {
        console.error("Error updation song", response.data);
      }
    } catch (error) {
      console.error("Error updating song", error);
    }
  };
  if (!modelSate.isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black text-white p-8 rounded-lg w-[90%] md:w-[50%] lg:w-[40%] shadow-lg">
        <div className="flex  items-center justify-between">
          <h2 className="text-2xl mb-4">Edit Song</h2>
          <FontAwesomeIcon
            icon={faX}
            onClick={handleClose}
            className="text-2xl mb-4 hover:text-red-500 transform duration-500 ease-in-out"
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
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded col-span-2 bg-transparent"
          />
          <input
            type="text"
            placeholder="Album Name"
            name="albumName"
            value={formData.albumName}
            onChange={handleChange}
            className="p-2 border rounded bg-transparent"
          />
          <input
            type="text"
            placeholder="Singer Name"
            name="singerName"
            value={formData.singerName}
            onChange={handleChange}
            className="p-2 border rounded bg-transparent"
          />
          <input
            type="text"
            placeholder="Language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="p-2 border rounded bg-transparent"
          />
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
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
