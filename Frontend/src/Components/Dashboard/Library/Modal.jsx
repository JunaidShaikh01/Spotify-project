import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../Recoil/recoil";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faX } from "@fortawesome/free-solid-svg-icons";
export default function Modal() {
  const [, setIsModalOpen] = useRecoilState(modalState);
  return (
    <div className="absolute bg-black bg-opacity-50 top-0 right-0 h-screen w-screen flex items-center justify-center ">
      <div className=" z-auto bg-[#282828] rounded-lg p-6 flex flex-col gap-4 w-[40%] shadow-2xl">
        <div className="headerSection flex  items-center justify-between">
          <p className="text-white text-2xl font-semibold">Edit details</p>
          <FontAwesomeIcon
            icon={faX}
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="hover:scale-110 text-2xl hover:text-gray-200 transform duration-200 ease-in-out text-gray-500"
          />
        </div>
        <div className="PlaylistForm flex gap-3 w-full">
          <div className="bg-[#201f1f] shadow-2xl w-[50%] rounded-lg flex items-center justify-center">
            <FontAwesomeIcon
              icon={faMusic}
              className="text-[#3e3e3e] text-5xl"
            />
          </div>
          <div className="flex flex-col gap-2">
            <TextField
              id="outlined-basic"
              label="Playlist Title"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "gray",
                },
              }}
            />
            <button
              onClick={() => {
                setIsModalOpen(false);
              }}
              className="bg-white rounded-md py-4 font-semibold hover:bg-gray-400 hover:scale-105 shadow-xls transform ease-in-out duration-200"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="btnSection">
          <p className="text-white">
            By proceeding, you agree to give Spotify access to the image you
            choose to upload. Please make sure you have the right to upload the
            image.
          </p>
        </div>
      </div>
    </div>
  );
}
