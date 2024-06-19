import React from "react";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import axios from "axios";

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
  data.append("audioUrl", formData.get("audioUrl"));
  data.append("imageUrl", formData.get("imageUrl"));

  console.log("Data Recieved  ", data);
  try {
    await axios.post("http://localhost:3000/api/v1/admin/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};
