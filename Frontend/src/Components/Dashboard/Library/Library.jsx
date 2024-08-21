import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CreateLibraryBanner from "./CreateLibraryBanner";
import { dateFetchState, modalState, userDataState } from "../Recoil/recoil";
import { useRecoilState } from "recoil";
import Modal from "./Modal";
import axios from "axios";
import { useParams } from "react-router-dom";
import Player from "../Player/Player";

export default function Library() {
  const [isModalOpen] = useRecoilState(modalState);
  const [userData] = useRecoilState(userDataState);
  const [fetchedData] = useRecoilState(dateFetchState);
  const [userSelectedPlaylist, setuserSelectedPlaylist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserClickedPlaylist = async () => {
      try {
        const playlist = await axios.get(
          `http://localhost:3000/api/v1/dashboard/playlists/playlist/${id}`
        );
        setuserSelectedPlaylist(playlist.data);
        console.log("calling the api ");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUserClickedPlaylist();
  }, [id]);

  return (
    <div className="bg-black h-screen w-screen ">
      <div className="flex h-[88vh] w-full gap-2 p-2">
        <Sidebar data={fetchedData} />
        <div className="bg-[#121212] rounded-lg text-white w-full h-full overflow-auto ">
          <Header data={userData} />
          <CreateLibraryBanner playlistInfo={userSelectedPlaylist} />
          <Footer />
        </div>
      </div>
      <Player />
      {isModalOpen ? <Modal /> : ""}
    </div>
  );
}
