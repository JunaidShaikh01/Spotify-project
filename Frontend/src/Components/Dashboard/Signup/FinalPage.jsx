import React from "react";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { formDataState } from "../Recoil/recoil";

export default function FinalPage() {
  const [formData] = useRecoilState(formDataState);
  const navigate = useNavigate();
  const handleNext = () => {
    console.log("Form data", formData);
    navigate("/");
  };
  return (
    <div className="bg-[#121212] pt-4  w-full flex  justify-center">
      <div className="w-[30vw]   text-center flex gap-6 flex-col justify-center">
        <FontAwesomeIcon icon={faSpotify} className="text-white text-[3rem]" />
        <div className="relative">
          <div className="relative z-10 p-4">
            <div className="flex items-center gap-6">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="text-[#b2b2b2] text-3xl font-thin"
              />
              <div className="flex flex-col items-start">
                <p className="text-[#b2b2b2] font-semibold">Step 3 0f 3</p>
                <p className="text-white font-semibold text-lg">
                  Terms & Conditions
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center w-full px-4 mt-4">
              <div className="checkBox1 bg-[#232323] text-white text-start rounded-lg p-4 flex gap-2 items-start">
                <input
                  type="checkbox"
                  name="confermation1 "
                  className=" bg-[#121212] h-7 w-7"
                />
                <label>
                  I would prefer not to receive marketing messages from Spotify
                </label>
              </div>
              <div className="checkBox2 bg-[#232323] text-white text-start rounded-lg p-4 flex gap-2 items-start">
                <input
                  type="checkbox"
                  name="confermation2"
                  className=" bg-[#121212] h-[2.4rem] w-[2.4rem] "
                />
                <label>
                  Share my registration data with Spotify’s content providers
                  for marketing purposes.
                </label>
              </div>

              <div className="termsAndConditionSection flex flex-col gap-2">
                <div className="text-start">
                  <p className="text-white">
                    By clicking on ‘Sign up’, you agree to Spotify’s{" "}
                    <a
                      href="https://www.spotify.com/in-en/legal/end-user-agreement/"
                      target="_blank"
                      className="text-[#1ED760] underline"
                    >
                      {" "}
                      Terms and Conditions of Use.
                    </a>
                  </p>
                </div>
                <div className="text-start">
                  <p className="text-white">
                    To learn more about how Spotify collects, uses, shares and
                    protects your personal data, please see{" "}
                    <a
                      href="https://www.spotify.com/in-en/legal/privacy-policy/"
                      target="_blank"
                      className="text-[#1ED760] underline"
                    >
                      Spotify’s Privacy Policy.
                    </a>
                  </p>
                </div>
              </div>
              <button
                className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-black tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
                onClick={handleNext}
              >
                Signup
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
            <div
              className="h-full bg-[#1ED760]"
              style={{ width: "100%" }}
            ></div>
            <div className="h-full bg-[#727272] flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
