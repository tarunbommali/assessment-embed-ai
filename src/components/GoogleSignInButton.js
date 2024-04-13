import React, { useState, useEffect, useRef } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setIsLogin, setIsLogout } from "../redux-store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config/firebase";
import { FaChevronDown } from "react-icons/fa";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import SettingModal from "./SettingModal";

const GoogleSignInButton = () => {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isSettingOpen, setIsSettingOpen] = useState(false); // State to control the visibility of the settings modal
  const userName = useSelector((state) => state.user.userName);

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userName = result.user.displayName;
        dispatch(setIsLogin(userName));
        console.log("Successfully signed in with Google:", result.user);
        const ttl = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        const now = new Date();
        const userData = {
          userDetails: result.user,
          expiry: now.getTime() + ttl,
        };
        localStorage.setItem("userData", JSON.stringify(userData));

      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  const handleLogout = () => {
    dispatch(setIsLogout());
    setIsDropdownOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {userName === null ? (
        <button
          className="bg-white rounded-3xl text-black w-[100%] py-2 my-2"
          onClick={handleSignInWithGoogle}
        >
          Sign in With Google
        </button>
      ) : (
        <div className="relative">
          <div
            className="flex justify-between items-center bg-[#131316] text-white rounded-md px-4 my-2 py-4 hover:bg-[#3f3f46]"
            onClick={handleToggleDropdown}
          >
            <span className="bg-[#0d2662] rounded-full px-3 font-bold py-1">
              {userName[0]}
            </span>
            {userName} <p className="mx-1"><FaChevronDown /></p>
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 bottom-full w-full text-white bg-[#26272b] shadow-md rounded-md mt-2" ref={dropdownRef}>
              <button
                className="flex justify-between items-center  w-full text-left px-4 py-2 hover:bg-[#202024]"
                onClick={() => {
                  setIsSettingOpen(!isSettingOpen); // Toggle the settings modal
                }}
              >
                Setting <IoMdSettings />
              </button>
              <button
                className="flex justify-between items-center  w-full text-left px-4 py-2 hover:bg-[#202024]"
              >
                Profile <CgProfile />
              </button>
              <button
                className="flex justify-between items-center  w-full text-left px-4 py-2 hover:bg-[#202024]"
                onClick={handleLogout}
              >
                Logout <IoIosLogOut />
              </button>
            </div>
          )}
        </div>
      )}
      {/* Settings modal */}
      {isSettingOpen && (
        <SettingModal setIsSettingOpen={setIsSettingOpen} />
      )}
    </div>
  );
};

export default GoogleSignInButton;
