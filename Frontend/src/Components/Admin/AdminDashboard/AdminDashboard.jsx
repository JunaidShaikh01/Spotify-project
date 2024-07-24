import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import SongsList from "./SongsList";
import axios from "axios";
import DeleteModal from "../Modal/DeleteModal";
import EditModal from "../Modal/EditModal";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  deleteModalState,
  editModalState,
  songsChangedState,
} from "../Recoil/recoilState";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard() {
  const [songs, setSongs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    albumName: "",
    singerName: "",
    language: "",
    category: "",
    image: null,
    audio: null,
  });
  const setDeleteModalState = useSetRecoilState(deleteModalState);
  const setEditModalState = useSetRecoilState(editModalState);
  const [songsChanged, setSongsChanged] = useRecoilState(songsChangedState);
  const initialFormData = {
    name: "",
    albumName: "",
    singerName: "",
    language: "",
    category: "",
    image: null,
    audio: null,
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const token = localStorage.getItem("token");

  const fetchSongs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/admin/songs",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSongs(response.data);
    } catch (error) {
      console.error("Error fetching songs", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  useEffect(() => {
    if (songsChanged) {
      fetchSongs();
      setSongsChanged(false);
    }
  }, [songsChanged]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("albumName", formData.albumName);
    data.append("singerName", formData.singerName);
    data.append("language", formData.language);
    data.append("category", formData.category);
    data.append("image", formData.image);
    data.append("audio", formData.audio);
    data.append("duration", formData.duration);
    data.append("Region", formData.Region);
    console.log("Form data", data);

    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }

    try {
      await axios.post("http://localhost:3000/api/v1/admin/upload", data, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      });
      setFormData(initialFormData);
      fetchSongs();
      setShowModal(false);
    } catch (error) {
      console.error("Error uploading song", error);
    }
  };

  return (
    <div className="bg-black p-2 flex flex-col">
      <div className="h-[10vh] bg-[#1E1E1E] rounded-lg">
        <AdminNavbar />
      </div>
      <div className="bg-[#1E1E1E] h-[85vh] mt-3 rounded-lg px-10">
        <div className="flex w-full justify-between mt-4 items-center">
          <div className="w-[85%] flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 bg-transparent border rounded-s-lg focus:text-white"
            />
            <button
              type="button"
              className="bg-transparent border rounded-e-lg text-white px-2"
            >
              Search
            </button>
          </div>
          <div
            className="bg-[#1fdf64] px-4 py-2 rounded-lg border-none font-semibold text-xl flex items-center gap-2 shadow-lg cursor-pointer"
            onClick={handleShowModal}
          >
            <span>Add Song</span>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <SongsList
          songs={songs}
          setDeleteModalState={setDeleteModalState}
          setEditModalState={setEditModalState}
        />
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            // Ensured motion.div is inside AnimatePresence
            key="modal" // Added a key to help React identify the component
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <div className="bg-black text-white p-8 rounded-lg w-[90%] md:w-[50%] lg:w-[40%] shadow-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl mb-4">Add New Song</h2>
                <FontAwesomeIcon
                  icon={faX}
                  onClick={handleShowModal}
                  className="text-2xl mb-4 cursor-pointer"
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
                <input
                  type="text"
                  placeholder="Duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="p-2 border rounded bg-transparent"
                />
                <input
                  type="text"
                  placeholder="Region"
                  name="Region"
                  value={formData.Region}
                  onChange={handleChange}
                  className="p-2 border rounded bg-transparent"
                />
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleChange}
                  className="p-2 border rounded col-span-2 cursor-pointer bg-transparent"
                />
                <input
                  type="file"
                  accept="audio/*"
                  name="audio"
                  onChange={handleChange}
                  className="p-2 border rounded col-span-2 cursor-pointer bg-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#1fdf64] text-black font-semibold text-2xl py-2 rounded-lg col-span-2"
                >
                  Add
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <DeleteModal />
      <EditModal />
    </div>
  );
}
