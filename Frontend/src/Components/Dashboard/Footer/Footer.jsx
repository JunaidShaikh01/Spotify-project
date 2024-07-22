import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const pera =
  "text-[#B2B2B2] hover:text-white transform duration-300 ease-in-out cursor-pointer ";
const heading = "text-white text-lg font-medium cursor-pointer";
const icons =
  "h-10 w-10 rounded-full bg-[#292929] hover:bg-[#868585] transform duration-300 ease-in-out  flex items-center justify-center";
const footerNav =
  "hover:text-white duration-300 ease-in-out transform cursor-pointer";
export default function Footer() {
  return (
    <div className="px-8">
      <div className="flex w-full justify-between my-10 ">
        <div className="flex flex-col gap-2">
          <h1 className={heading}>Company</h1>
          <Link
            to="https://www.spotify.com/in-en/about-us/contact/"
            target="_blank"
            className={pera}
          >
            About
          </Link>
          <Link
            to="https://www.lifeatspotify.com/"
            target="_blank"
            className={pera}
          >
            Jobs
          </Link>
          <Link
            to="https://newsroom.spotify.com/"
            target="_blank"
            className={pera}
          >
            For the Record
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-lg font-medium cursor-pointer">
            Communities
          </h1>

          <Link
            to="https://artists.spotify.com/home"
            target="_blank"
            className={pera}
          >
            For Artists
          </Link>
          <Link
            to="https://developer.spotify.com/"
            target="_blank"
            className={pera}
          >
            Developers
          </Link>
          <Link
            to="https://ads.spotify.com/en-IN/"
            target="_blank"
            className={pera}
          >
            Advertising
          </Link>
          <Link
            to="https://investors.spotify.com/home/default.aspx"
            target="_blank"
            className={pera}
          >
            Investors
          </Link>
          <Link
            to="https://spotifyforvendors.com/"
            target="_blank"
            className={pera}
          >
            Vendors
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-lg font-medium cursor-pointer">
            Useful links
          </h1>
          <Link
            to="https://support.spotify.com/in-en/"
            target="_blank"
            className={pera}
          >
            Support
          </Link>
          <Link
            target="_blank"
            to="https://www.spotify.com/in-en/free/"
            className={pera}
          >
            {" "}
            Free Mobile App
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-lg font-medium cursor-pointer">
            Spotify Plans
          </h1>
          <Link
            to="https://www.spotify.com/in-en/premium/?ref=spotifycom_footer_premium_individual"
            target="_blank"
            className={pera}
          >
            Premium Individual
          </Link>
          <Link
            to="https://www.spotify.com/in-en/duo/?ref=spotifycom_footer_premium_duo"
            target="_blank"
            className={pera}
          >
            Premium Duo
          </Link>
          <Link
            to="https://www.spotify.com/in-en/family/?ref=spotifycom_footer_premium_family"
            target="_blank"
            className={pera}
          >
            Premium Family
          </Link>
          <Link
            to="https://www.spotify.com/in-en/student/?ref=spotifycom_footer_premium_student"
            target="_blank"
            className={pera}
          >
            Premium Student
          </Link>
          <Link
            to="https://www.spotify.com/in-en/free/?ref=spotifycom_footer_free"
            target="_blank"
            className={pera}
          >
            Spotify Free
          </Link>
        </div>
        <div className="flex gap-2">
          <div className={icons}>
            <Link to="https://www.instagram.com/spotify/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-4 w-4 text-white"
              />
            </Link>
          </div>
          <div className={icons}>
            <Link to="https://twitter.com/spotify">
              <FontAwesomeIcon icon={faX} className="h-4 w-4 text-white" />
            </Link>
          </div>
          <div className={icons}>
            <Link to="https://www.facebook.com/Spotify">
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-4 w-4 text-white"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[#393939] text-[#b2b2b2b2] w-full flex justify-between mb-10">
        <div className="my-5 flex gap-4">
          <Link
            to="https://www.spotify.com/in-en/legal/end-user-agreement/"
            target="_blank"
            className={footerNav}
          >
            Legal
          </Link>
          <Link
            to="https://www.spotify.com/in-en/safetyandprivacy"
            target="_blank "
            className={footerNav}
          >
            Safety & Privacy Center
          </Link>
          <Link
            to="https://www.spotify.com/in-en/legal/privacy-policy/"
            target="_blank"
            className={footerNav}
          >
            Privacy Policy
          </Link>
          <Link
            to="https://www.spotify.com/in-en/legal/cookies-policy/"
            target="_blank"
            className={footerNav}
          >
            Cookies
          </Link>
          <Link
            to="https://www.spotify.com/in-en/legal/privacy-policy/#s3"
            target="_blank"
            className={footerNav}
          >
            About Ads
          </Link>
          <Link
            to="https://www.spotify.com/in-en/accessibility"
            target="_blank"
            className={footerNav}
          >
            Accessibility
          </Link>
        </div>
        <span className="my-5">Accessibility © 2024 Spotify AB</span>
      </div>
    </div>
  );
}
