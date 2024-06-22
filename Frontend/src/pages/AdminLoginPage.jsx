import React from "react";
import AdminLogin from "../Components/Admin/Login/AdminLogin";
import { redirect } from "react-router-dom";
import axios from "axios";

export default function AdminLoginPage() {
  return <AdminLogin />;
}

export const action = async ({ request }) => {
  const formData = await request.formData();

  const authData = {
    adminId: formData.get("adminId"),
    password: formData.get("adminPassword"),
  };

  try {
    await axios.post("http://localhost:3000/api/v1/admin/login", {
      adminId: authData.adminId,
      password: authData.password,
    });
    return redirect("/adminDashboard");
  } catch (error) {
    console.log(error);
    return error;
  }
};
