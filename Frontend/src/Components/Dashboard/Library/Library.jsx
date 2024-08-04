import React from "react";
import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CreateLibraryBanner from "./CreateLibraryBanner";

export default function Library() {
  return (
    <div className="bg-black h-screen w-screen">
      <div className="flex h-full w-full gap-2 p-2">
        <Sidebar />
        <div className="bg-[#121212] rounded-lg text-white w-full h-full overflow-auto ">
          <Header />
          <CreateLibraryBanner />
          <Footer />
        </div>
      </div>
    </div>
  );
}
