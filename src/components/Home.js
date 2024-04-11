import React from "react";
// import useDiscoveryData from "../custom-hooks/useDiscoveryData";
import CardList from "./CardList";
import cardDataList from "../utils/hardCodeCardList";
import { Link } from "react-router-dom";

const Home = () => {
  // const data = useDiscoveryData();

  const renderSearchInput = () => {
    return (
      <div className="flex justify-between items-center">
        <h1>USER_NAME</h1>
        <div className="flex items-center   bg-[#202024] w-[30%] px-4 py-2 my-2 rounded-3xl">
          🔎
          <input
            type="search"
            className="bg-[#202024] w-[100%] p-2 outline-none"
            placeholder="Search for Characters"
          />
        </div>
      </div>
    );
  };
  const renderImages = () => {
    return (
      <div className="flex justify-center items-center text-center my-4">
        <img src="https://character.ai/_next/image?url=%2Fhomeassets%2Fnoblewoman.webp&w=96&q=25" alt="" className="rounded-xl" />
        <img src="https://character.ai/_next/image?url=%2Fhomeassets%2Fzeus.webp&w=128&q=25" alt=""  className="rounded-xl"/>
        <img src="https://character.ai/_next/image?url=%2Fhomeassets%2Fphilosopher.webp&w=96&q=25" alt="" className="rounded-xl" />
      </div>

    )
  }

  const renderBootomView = () => {
    return (
      <div className="w-[400px] flex justify-center flex-col">
        {renderImages()}
        <h1 className="text-xl my-4">Create a Character</h1>
        <p className="text-[#a2a2ac]">Not vibing with any characters? Create one of your own! Customize things like their voice, conversation starts, their tone, and more!</p>
       <div className="my-8"> <Link to="/character/new" className='flex-end  bg-[#ffffff] items-end rounded-3xl text-black px-4 py-2 my-3'>✨ Create a Character</Link></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-[#18181b] min-h-[100%] px-12 py-6">
      {renderSearchInput()}
      <div className="bg-[#6a6a6a] h-[300px] rounded-3xl"></div>

        <CardList cardsList={cardDataList} title={"For you"} />
      
        <CardList cardsList={cardDataList} title={"Featured"}/>
    <div className="flex justify-center items-center text-center  h-[90vh] ">
      {renderBootomView()}
      </div>
    </div>
  );
};

export default Home;
