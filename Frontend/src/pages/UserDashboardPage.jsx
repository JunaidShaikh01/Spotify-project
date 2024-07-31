import React from "react";
import Dashboard from "../Components/Dashboard/Dashboard";
import axios from "axios";

export default function UserDashboardPage() {
  return <Dashboard />;
}

export const loadData = async ()=>{
    const token = localStorage.getItem("token");
    try {
        const {data} = await axios.get("")
    } catch (error) {
        
    }
}
