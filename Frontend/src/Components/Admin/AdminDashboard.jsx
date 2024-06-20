import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-router-dom";
import SongsList from "./SongsList";

export default function AdminDashboard({ songs }) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  console.log("songs", songs);
  return (
    <div className="bg-black h-screen w-screen p-2 flex flex-col">
      <div className="h-[10vh] bg-[#1E1E1E]">
        <AdminNavbar />
      </div>
      <div className=" bg-[#1E1E1E] h-[85vh] mt-3  rounded-lg px-10">
        <div className="flex w-full justify-between  mt-4 items-center">
          <div className="w-[85%] flex gap-2 ">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 bg-transparent border rounded-s-lg focus:text-white"
            />
            <button
              type="button"
              className="bg-transparent border rounded-e-lg text-white  px-2"
            >
              Search
            </button>
          </div>
          <div
            className="bg-[#1fdf64] px-4 py-2 rounded-lg border-none font-semibold txet-xl flex items-center gap-2 shadow-lg cursor-pointer "
            onClick={handleShowModal}
          >
            <span>Add Song</span>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black text-white p-8 rounded-lg w-[90%] md:w-[50%] lg:w-[40%] shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl mb-4">Add New Song</h2>
              <FontAwesomeIcon
                icon={faX}
                onClick={handleShowModal}
                className="text-2xl mb-4 cursor-pointer"
              />
            </div>
            <Form
              method="post"
              action="/adminDashboard"
              encType="multipart/form-data"
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Name of Song"
                name="name"
                className="p-2 border rounded col-span-2 bg-transparent"
              />
              <input
                type="text"
                placeholder="Album Name"
                name="albumName"
                className="p-2 border rounded bg-transparent"
              />
              <input
                type="text"
                placeholder="Singer Name"
                name="singerName"
                className="p-2 border rounded bg-transparent"
              />
              <input
                type="text"
                placeholder="Language"
                name="language"
                className="p-2 border rounded bg-transparent"
              />
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="p-2 border rounded bg-transparent"
              />

              <input
                type="file"
                accept="image/*"
                name="image"
                className="p-2 border rounded col-span-2 cursor-pointer bg-transparent"
              />
              <input
                type="file"
                accept="audio/*"
                name="audio"
                className="p-2 border rounded col-span-2 cursor-pointer bg-transparent"
              />
              <button
                onClick={handleShowModal}
                className="bg-[#1fdf64] text-black font-semibold text-2xl py-2 rounded-lg col-span-2"
              >
                Add
              </button>
            </Form>
          </div>
        </div>
      )}
      <SongsList songs={songs} />
    </div>
  );
}
