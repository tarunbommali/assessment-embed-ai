import React from "react";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const SettingModal = ({ setIsSettingOpen }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className="fixed  top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-[#26272b] w-[400px] rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Settings</h3>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setIsSettingOpen(false)}
          >
            <IoIosClose />
          </button>
        </div>
        <div className="p-4 text-[#a2a2ac]">
          <div className="flex flex-col py-2 px-4 my-4 border-[1px]   rounded-lg  border-[#7a7b83]">
            <label htmlFor="language">Language</label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={handleChange}
              className="text-white py-2 bg-[#26272b] outline-none border-none"
            >
              <option value="english" className="my-2">English</option>
              <option value="hindi" className="my-2">Hindi</option>
              <option value="telugu" className="my-2">Telugu</option>
            </select>
          </div>
          <div className="my-4 text-lg px-2 py-2 flex flex-col">
            Theme
            <div className="flex text-black">
              <button className="px-4 py-2 mr-2 bg-white rounded-lg  ">
                System
              </button>
              <button className="px-4 py-2 mr-2 bg-white rounded-lg ">
                Dark
              </button>
              <button className="px-4 py-2 mr-2 bg-white rounded-lg ">
                Light
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;
