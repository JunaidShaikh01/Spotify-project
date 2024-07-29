import React, { useRef } from "react";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { formDataState } from "../Recoil/recoil";
export default function Page1({ setStep }) {
  const emailRef = useRef();
  const [formData, setFormData] = useRecoilState(formDataState);

  const handleNext = () => {
    setFormData({
      ...formData,
      email: emailRef.current.value,
    });

    setStep(2);
  };

  console.log("Form data", formData);
  return (
    <div className="bg-[#121212] h-screen w-full flex  justify-center">
      <div className="w-[30vw]   text-center flex flex-col justify-center">
        <div className="flex flex-col items-center  text-white">
          <FontAwesomeIcon icon={faSpotify} className="text-[3rem]" />
          <h1 className="text-[3rem] font-semibold">
            Sign up to start listening
          </h1>
        </div>
        <div className="flex w-full  items-center justify-center mt-4 ">
          <div className="flex flex-col gap-4 justify-center w-full px-4">
            <label className="text-white text-start" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              required
              name="email"
              ref={emailRef}
              placeholder="name@domain.com"
              className=" w-full bg-transparent border-gray-400 text-lg text-white border rounded-lg py-3 pl-4 placeholder:text-[#b2b2b2]"
            />

            <button
              onClick={handleNext}
              className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-black tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
            >
              Next
            </button>
          </div>
        </div>
        <div className="border-b border-gray-600 my-8"></div>
        <div className="text-[#b2b2b2] flex gap-2 justify-center items-center">
          <p className="text-lg">Already have an account?</p>

          <Link to={"/login"} className="text-white underline">
            {" "}
            Log in here{" "}
          </Link>
        </div>
        <div className="mt-4 text-base">
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
    </div>
  );
}
