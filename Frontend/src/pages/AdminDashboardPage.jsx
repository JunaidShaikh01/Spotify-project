import React from "react";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import axios from "axios";
import { redirect } from "react-router-dom";

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}

export const addSongAction = async ({ request }) => {
  const formData = await request.formData();

  const data = new FormData();
  data.append("name", formData.get("name"));
  data.append("albumName", formData.get("albumName"));
  data.append("singerName", formData.get("singerName"));
  data.append("language", formData.get("language"));
  data.append("category", formData.get("category"));
  data.append("audio", formData.get("audio"));
  data.append("image", formData.get("image"));

  // Log formData content
  console.log("data", data);
  for (let [key, value] of data.entries()) {
    console.log(key, value);
  }

  try {
    await axios.post("http://localhost:3000/api/v1/admin/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return redirect("/adminDashboard");
  } catch (error) {
    console.error(
      "Error uploading song:",
      error.response ? error.response.data : error.message
    );
    return error.message;
  }
};
