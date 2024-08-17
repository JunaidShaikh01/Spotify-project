import React, { Suspense, useEffect } from "react";
import Dashboard from "../Components/Dashboard/Dashboard";
import axios from "axios";
import { Await, defer, useLoaderData } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userDataState } from "../Components/Dashboard/Recoil/recoil";

export default function UserDashboardPage() {
  const { data } = useLoaderData();
  const [, setUserData] = useRecoilState(userDataState);

  useEffect(() => {
    data.then((resolvedData) => {
      setUserData(resolvedData);
    });
  }, [data, setUserData]);

  return (
    <div>
      <Suspense
        fallback={
          <div className="bg-black w-[100vw] h-[100vh] flex items-center justify-center">
            <h1 className="text-[#1ED760] text-[3rem] font-extrabold">
              Loading..
            </h1>
          
          </div>
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
          {(resolvedData) => (
            <>
              <Dashboard data={resolvedData} />
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
    data: loadData(), // Still defer the data here
  });
};
