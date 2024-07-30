import React from "react";
import Login from "../Components/Dashboard/Login/Login";
import axios from "axios";
import { redirect } from "react-router-dom";

export default function LoginPage() {
  return <Login />;
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const userData = {
    username: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/v1/dashboard/login",
      {
        username: userData.username,
        password: userData.password,
      }
    );

    localStorage.clear();
    localStorage.setItem("token", data.token);
    return redirect("/");
  } catch (error) {
    console.log(error);
    return error;
  }
};
