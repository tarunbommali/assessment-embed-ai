import React, { useState, useEffect, useRef } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setIsLogin, setIsLogout } from "../redux-store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config/firebase";
import { FaChevronDown } from "react-icons/fa";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import Popup from 'reactjs-popup';

const GoogleSignInButton = () => {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const userName = useSelector((state) => state.user.userName);

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
        const userName = result.user.displayName; // Get the user's display name
        dispatch(setIsLogin(userName)); // Dispatch action to set user login status

        console.log("Successfully signed in with Google:", result.user);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error signing in with Google:", error);
      });
  };

  const handleLogout = () => {
    // Dispatch action to handle logout
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
            <span className="bg-[#0d2662] rounded-full px-3 font-bold py-1">{userName[0]}</span>{userName} <p className="mx-1"><FaChevronDown /></p>
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 bottom-full w-full text-white bg-[#26272b] shadow-md rounded-md mt-2" ref={dropdownRef}>
              <Popup
                trigger={
                  <button className="flex justify-between items-center  w-full text-left px-4 py-2 hover:bg-[#202024]">
                    Setting <IoMdSettings />
                  </button>
                }
                position="right center"
                closeOnDocumentClick
              >
                <div className="flex flex-col bg-white px-4 py-2 text-lg rounded-lg">
                  <h1>Preference</h1>
                </div>
              </Popup>
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
              {/* Add more menu items as needed */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GoogleSignInButton;
