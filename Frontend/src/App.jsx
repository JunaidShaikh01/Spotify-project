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
import MultipulSignup from "./Components/Dashboard/Signup/MultipulSignup";
import LoginPage, { action as userLoginAction } from "./pages/LoginPage";
import UserDashboardPage, {
  loader as dashboardLoader,
} from "./pages/UserDashboardPage";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <UserDashboardPage />, loader: dashboardLoader },
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
      element: <LoginPage />,
      action: userLoginAction,
    },
    {
      path: "/Signup",
      element: <MultipulSignup />,
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
