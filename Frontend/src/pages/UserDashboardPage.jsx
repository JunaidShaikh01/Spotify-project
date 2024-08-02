import React, { Suspense } from "react";
import Dashboard from "../Components/Dashboard/Dashboard";
import axios from "axios";
import { Await, defer, useLoaderData } from "react-router-dom";

export default function UserDashboardPage() {
  const { data } = useLoaderData();

  return (
    <div>
      <Suspense
        fallback={
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: "1.2rem",
              marginTop: "10rem",
            }}
          >
            Loading..
          </h1>
        }
      >
        <Await
          resolve={data}
          errorElement={
            <div>
              <h1>Failed to load data. Displaying the dashboard.</h1>
              <Dashboard data={null} />
            </div>
          }
        >
          {(data) => (
            <>
              <Dashboard data={data} />
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export const loadData = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  try {
    const { data } = await axios.get(
      "http://localhost:3000/api/v1/dashboard/me",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const loader = () => {
  return defer({
    data: loadData(),
  });
};
