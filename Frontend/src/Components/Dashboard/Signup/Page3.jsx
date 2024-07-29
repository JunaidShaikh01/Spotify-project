import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { formDataState } from "../Recoil/recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Page3({ setStep }) {
  const nameRef = useRef();
  const yearRef = useRef();
  const monthRef = useRef();
  const dayRef = useRef();
  const genderRef = useRef();
  const [formData, setFormData] = useRecoilState(formDataState);
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    setFormData({
      ...formData,
      name: nameRef.current.value,
      year: yearRef.current.value,
      month: monthRef.current.value,
      day: dayRef.current.value,
      gender: selectedOption,
    });

    setStep(3);
    console.log("Form data", formData);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  console.log("selected option", selectedOption);
  return (
    <div className="bg-[#121212]   w-full flex  justify-center">
      <div className="w-[28vw]   text-center flex gap-8 flex-col justify-center">
        <FontAwesomeIcon icon={faSpotify} className="text-white text-[3rem]" />
        <div className="relative">
          <div className="relative z-10 p-4">
            <div className="flex items-center gap-6">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="text-[#b2b2b2] text-3xl font-thin"
              />
              <div className="flex flex-col items-start">
                <p className="text-[#b2b2b2] font-semibold">Step 2 0f 3</p>
                <p className="text-white font-semibold text-lg">
                  Tell us about yourself
                </p>
              </div>
            </div>
            <div className="formSection flex flex-col gap-4">
              <div className="nameSection text-start mt-4">
                <label className="text-white font-semibold" htmlFor="name">
                  {" "}
                  Name
                </label>
                <p className="text-[#b2b2b2]">
                  {" "}
                  This name will appear on your profile
                </p>
                <input
                  type="text"
                  ref={nameRef}
                  required
                  name="name"
                  className=" w-full bg-transparent border-gray-400 text-lg text-white border rounded-md py-2 pl-4 placeholder:text-[#b2b2b2]"
                />
              </div>
              <div className="dateOfBirthSection text-start">
                <label className="text-white font-semibold" htmlFor="dob">
                  {" "}
                  Date of Birth
                </label>
                <p className="text-[#b2b2b2]">
                  Why do we need your date of birth?{" "}
                  <a
                    href="https://www.spotify.com/in-en/legal/end-user-agreement/"
                    className="underline"
                  >
                    Learn More
                  </a>
                  .
                </p>
                <div className="flex gap-4">
                  <input
                    type="text"
                    ref={yearRef}
                    required
                    name="year"
                    placeholder="yyyy"
                    className="w-[30%] bg-transparent border-gray-400 text-lg text-white border text-center rounded-md h-10 placeholder:text-[#b2b2b2]"
                  />
                  <select
                    ref={monthRef}
                    required
                    name="month"
                    placeholder="Month"
                    className="bg-transparent border-gray-400 h-10 text-lg text-[#b2b2b2] border  placeholder:text-[#b2b2b2] rounded-md w-full px-2"
                  >
                    <option value="" className="bg-[#121212] text-white">
                      Month
                    </option>
                    <option value="01" className="bg-[#121212] text-white">
                      January
                    </option>
                    <option value="02" className="bg-[#121212] text-white">
                      February
                    </option>
                    <option value="03" className="bg-[#121212] text-white">
                      March
                    </option>
                    <option value="04" className="bg-[#121212] text-white">
                      April
                    </option>
                    <option value="05" className="bg-[#121212] text-white">
                      May
                    </option>
                    <option value="06" className="bg-[#121212] text-white">
                      June
                    </option>
                    <option value="07" className="bg-[#121212] text-white">
                      July
                    </option>
                    <option value="08" className="bg-[#121212] text-white">
                      August
                    </option>
                    <option value="09" className="bg-[#121212] text-white">
                      September
                    </option>
                    <option value="10" className="bg-[#121212] text-white">
                      October
                    </option>
                    <option value="11" className="bg-[#121212] text-white">
                      November
                    </option>
                    <option value="12" className="bg-[#121212] text-white">
                      December
                    </option>
                  </select>
                  <input
                    type="text"
                    name="day"
                    ref={dayRef}
                    placeholder="dd"
                    className="w-[20%] bg-transparent border-gray-400 text-lg text-white border text-center rounded-md h-10 placeholder:text-[#b2b2b2]"
                  />
                </div>
              </div>
              <div className="genderSection text-start">
                <label className="text-white font-semibold" htmlFor="name">
                  {" "}
                  Gender
                </label>
                <p className="text-[#b2b2b2]">
                  {" "}
                  We use your gender to help personalise our content
                  recommendations and ads for you.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="man"
                      name="man"
                      value="man"
                      checked={selectedOption === "man"}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="man" className="text-white">
                      Man
                    </label>
                  </div>
                  <div className="flex gap-2 text-[#b2b2b2]">
                    <input
                      type="radio"
                      id=" Woman"
                      name=" Women"
                      value=" Women"
                      checked={selectedOption === " Women"}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="Women" className="text-white">
                      Women
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="Prefer not to say"
                      name="Prefer not to say"
                      value="Prefer not to say"
                      checked={selectedOption === "Prefer not to say"}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="Prefer not to say" className="text-white">
                      Prefer not to say
                    </label>
                  </div>
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
            <div className="h-full bg-[#1ED760]" style={{ width: "70%" }}></div>
            <div className="h-full bg-[#727272] flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
