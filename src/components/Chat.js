import { useParams } from "react-router-dom";
import cardDataList from "../utils/hardCodeCardList";
import { NO_IMG_URL } from "../utils/constants";
import {useSelector} from 'react-redux'

const Chat = () => {
  const { id } = useParams();
  const userName = useSelector((state) => state.user.userName);

  if (userName === null) {
    return  <div className="flex justify-center items-center my-4 text-white">"Please sign in to continue."</div>
  }
  
  const userData = cardDataList.filter((user) => user.user__username === id);
  const {
    name,
    title,
    user__username,
  } = userData[0];

  const renderProfileDetails = () => {
    return (
        <div className="flex flex-col min-h-screen w-[25%] border-l p-4 m-0 border-[#3a3a3d]">
        <div className="flex">
            <img src="" alt="" className="rounded-[50%] h-[48px] w-[48px] mx-2"/>
            <div className="flex flex-col">
            <h1 className="text-[#94949e] font-semibold">{name}</h1>
            <h1 className="text-[#94949e]">By @{user__username}</h1>
            </div>
        </div>
        </div>
        
    )
  }


  

  return (
    <div className="flex min-h-screen justify-center items-center px-4">
        
      <div className="flex flex-col justify-between items-center h-[90%] w-[75%] px-4 ">
        <div className="flex flex-col my-5 justify-center items-center">
            <img src="" alt="" className="rounded-[50%] h-[48px] w-[48px]"/>
            <h1>{name}</h1>
            <h1>{title}</h1>
            <h1>By @{user__username}</h1>

        </div>
        <div className="flex  h-[60vh] flex-col justify-between  w-[100%] ">
          <div className="flex items-center"><img src={NO_IMG_URL}  alt="avatar" className="rounded-full mx-2 h-[48px] w-[48px]" />{name} <span className="mx-2 px-4 rounded-3xl bg-[#26272b]" >c.ai</span></div>
        
        
          <div className="felx justify-between w-[100%] bg-[#202024] border-2 border-[#303136] rounded-3xl">
            <input type="text" placeholder={`Message ${name} ...`} className="w-[95%] bg-[#202024] outline-none rounded-3xl px-4 py-2"/>
           <span className="bg-[[#e4e4e5] rounded-full"> 📩</span>
        </div>
    

        </div>
      </div>
      {renderProfileDetails()}
    </div>
  );
};

export default Chat;
