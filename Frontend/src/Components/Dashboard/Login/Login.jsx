import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="">
      <div className="bg-gradient-to-b from-[#292929] to-[#020202] pt-1 h-screen  flex justify-center items-center">
        <div className="bg-[#121212] w-[60%] h-[90%] rounded-lg flex flex-col items-center justify-center shadow-xl">
          <div className="logoSection text-white text-center flex flex-col gap-3">
            <FontAwesomeIcon icon={faSpotify} className="text-4xl" />
            <p className="text-4xl">Log to Spotify</p>
          </div>
          <Form
            method="post"
            action="/login"
            className="flex flex-col w-[50%] items-center  gap-4 mt-4"
          >
            <div className="flex flex-col items-start w-full gap-2">
              <label htmlFor="name" className="text-white">
                Email or username
              </label>
              <input
                type="email"
                name="email"
                id="name"
                placeholder="Email or Username"
                className=" w-full bg-transparent border-gray-400 text-lg text-white border rounded-md py-2 pl-4 placeholder:text-[#b2b2b2]"
              />
            </div>
            <div className="flex flex-col items-start w-full gap-2">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className=" w-full bg-transparent border-gray-400 text-lg text-white border rounded-md py-2 pl-4 placeholder:text-[#b2b2b2]"
              />
            </div>
            <button className="px-12 py-3  w-full rounded-full bg-[#1ED760] font-bold text-black tracking-widest  transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
              Login
            </button>
            <p className="text-white hover:text-[#1ED760] transform duration-200 transition-colors underline cursor-pointer">
              Forgot your password?
            </p>
          </Form>
          <div className="signupPageLinkSection mt-4  w-[70%] flex justify-center border-t border-gray-600">
            <p className="text-white my-4">
              Don't have an account?{" "}
              <Link to="/Signup" className=" hover:text-[#1ED760]">
                Sign up for Spotify
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] h-[15vh] flex items-center justify-center">
        <p className="text-[#b2b2b2]">
          This site is protected by reCAPTCHA and the Google
          <span className="underline ">
            <a href="https://policies.google.com/privacy"> Privacy Policy</a>{" "}
          </span>
          {"    "}
          and{" "}
          <span className="underline">
            <a href="https://policies.google.com/terms">Terms of Service</a>
          </span>
          {"  "}
          apply.
        </p>
      </div>
    </div>
  );
}
