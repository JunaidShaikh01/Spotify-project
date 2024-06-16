import React from "react";
import AdminLogin from "./Components/Admin/AdminLogin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminDashboard from "./Components/Admin/AdminDashboard";
export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/adminLogin", element: <AdminLogin /> },
    { path: "/adminDashboard", element: <AdminDashboard /> },
  ]);
  return <RouterProvider router={router} />;
}
