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
import SelectedRedio from "./Components/Dashboard/Redio/SelectedRedio";
import SelectedCarts from "./Components/Dashboard/Featured Charts/SelectedCarts";
import Login from "./Components/Dashboard/Login/Login";
import Signup from "./Components/Dashboard/Signup/Signup";

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
    {
      path: "/selectedRedio",
      element: <SelectedRedio />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
    {
      path: "/selectedCarts",
      element: <SelectedCarts />,
    },
  ]);
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}
