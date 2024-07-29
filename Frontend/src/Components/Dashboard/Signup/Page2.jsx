import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { formDataState } from "../Recoil/recoil";
export default function Page2({ setStep }) {
  const passwordRef = useRef();
  const [formData, setFormData] = useRecoilState(formDataState);

  const handleNext = () => {
    setFormData({
      ...formData,
      password: passwordRef.current.value,
    });

    setStep(3);
    console.log("Form data", formData);
  };

  return (
    <div className="bg-[#121212] h-screen w-full flex  justify-center">
      <div className="w-[30vw]   text-center flex gap-8 flex-col justify-center">
        <FontAwesomeIcon icon={faSpotify} className="text-white text-[3rem]" />
        <div className="relative">
          <div className="relative z-10 p-4">
            <div className="flex items-center gap-6">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="text-[#b2b2b2] text-3xl font-thin"
              />
              <div className="flex flex-col items-start">
                <p className="text-[#b2b2b2] font-semibold">Step 1 0f 3</p>
                <p className="text-white font-semibold text-lg">
                  Create a password
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center w-full px-4">
              <label className="text-white text-start" htmlFor="password">
                password
              </label>
              <input
                type="password"
                required
                name="password"
                ref={passwordRef}
                className=" w-full bg-transparent border-gray-400 text-lg text-white border rounded-lg py-3 pl-4 placeholder:text-[#b2b2b2]"
              />
              <div className="text-white text-start flex flex-col gap-2">
                <p>Your Password must contain at least</p>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#121212] border-2 h-3 w-3 border-[#b2b2b2] rounded-full"
                  />
                  <p>1 letter</p>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#121212] border-2 h-3 w-3 border-[#b2b2b2] rounded-full"
                  />
                  <p className="">1 number or special character</p>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#121212] border-2 h-3 w-3 border-[#b2b2b2] rounded-full"
                  />
                  <p>10 characters</p>
                </div>
              </div>
              <button
                onClick={handleNext}
                className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-black tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
              >
                Next
              </button>
            </div>
            <div className="mt-10 text-sm">
              <p className="text-[#b2b2b2]">
                This site is protected by reCAPTCHA and the Google
                <span className="underline ">
                  <a href="https://policies.google.com/privacy">
                    {" "}
                    Privacy Policy
                  </a>{" "}
                </span>
                {"    "}
                and{" "}
                <span className="underline">
                  <a href="https://policies.google.com/terms">
                    Terms of Service
                  </a>
                </span>
                {"  "}
                apply.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-0.5 flex">
            <div className="h-full bg-[#1ED760]" style={{ width: "40%" }}></div>
            <div className="h-full bg-[#727272] flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
