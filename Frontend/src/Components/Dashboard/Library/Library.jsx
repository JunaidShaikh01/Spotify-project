import React from "react";
import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CreateLibraryBanner from "./CreateLibraryBanner";
import { dateFetchState, modalState, userDataState } from "../Recoil/recoil";
import { useRecoilState } from "recoil";
import Modal from "./Modal";

export default function Library() {
  const [isModalOpen] = useRecoilState(modalState);
  const [userData] = useRecoilState(userDataState);
  const [fetchedData] = useRecoilState(dateFetchState);
  console.log("User data ", userData);
  console.log("Is modal open ", isModalOpen);

  return (
    <div className="bg-black h-screen w-screen relative">
      <div className="flex h-full w-full gap-2 p-2">
        <Sidebar data={fetchedData} />
        <div className="bg-[#121212] rounded-lg text-white w-full h-full overflow-auto ">
          <Header data={userData} />
          <CreateLibraryBanner />
          <Footer />
        </div>
      </div>

      {isModalOpen ? <Modal /> : ""}
    </div>
  );
}
