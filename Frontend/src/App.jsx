import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminLoginPage, {
  action as adminLoginAction,
} from "./pages/AdminLoginPage";
import AdminDashboard from "./Components/Admin/AdminDashboard/AdminDashboard";
import { RecoilRoot } from "recoil";
import SelectedArtist from "./Components/Dashboard/Artist/SelectedArtist";
import SelectedAlbum from "./Components/Dashboard/PopularAlbum/SelectedAlbum";
export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    {
      path: "/adminLogin",
      element: <AdminLoginPage />,
      action: adminLoginAction,
    },
    {
      path: "/adminDashboard",
      element: <AdminDashboard />,
    },
    {
      path: "/selectedArtist",
      element: <SelectedArtist />,
    },
    {
      path: "/selectedAlbum",
      element: <SelectedAlbum />,
    },
  ]);
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}
