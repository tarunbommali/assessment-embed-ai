import React from "react";
import useDiscoveryData from "../custom-hooks/useDiscoveryData";
import CardList from "./CardList";

const Home = () => {
  const data = useDiscoveryData();

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

  const renderBootomView = () => {
    return (
      <div className="h-[50%] flex justify-center flex-col">
        <h1>Create a Character</h1>
        <p>Not vibing with any characters? Create one of your own! Customize things like their voice, conversation starts, their tone, and more!</p>

      </div>
    )
  }

  return (
    <div className="flex flex-col bg-[#18181b] min-h-[100%] px-12 py-6">
      {renderSearchInput()}
      <div className="bg-[#6a6a6a] h-[300px] rounded-3xl"></div>
      {data && data[0]?.result?.data?.json?.characters && (
        <CardList cardsList={data[0].result.data.json.characters} title={"For You"}/>
      )}

    {data && data[0]?.result?.data?.json?.characters && (
        <CardList cardsList={data[0].result.data.json.characters} title={"Featured"}/>
      )}

      {renderBootomView()}
    </div>
  );
};

export default Home;
