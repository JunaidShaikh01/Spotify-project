import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminLoginPage, {
  action as adminLoginAction,
} from "./pages/AdminLoginPage";
import AdminDashboardPage, { addSongAction } from "./pages/AdminDashboardPage";
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
      element: <AdminDashboardPage />,
      action: addSongAction,
    },
  ]);
  return <RouterProvider router={router} />;
}
