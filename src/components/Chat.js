import { useParams } from "react-router-dom";
import cardDataList from "../utils/hardCodeCardList";
import { NO_IMG_URL } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addChat } from "../redux-store/chatUsers";

const Chat = () => {
  const { id } = useParams();
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userName !== null) {
      const userData = cardDataList.find((user) => user.user__username === id);
      if (userData) {
        const { name, user__username, title } = userData;
        const newChat = { name, username: user__username, title };
        dispatch(addChat(newChat));
      }
    }
  }, [dispatch, id, userName]);

  const renderProfileDetails = () => {
    return (
      <div className="flex-col min-h-screen hidden md:block w-[20vw] border-l p-4 m-0 border-[#3a3a3d]">
        <div className="flex">
          <img src="" alt="" className="rounded-[50%] h-[48px] w-[48px] mx-2" />
          <div className="flex flex-col">
            <h1 className="text-[#94949e] font-semibold">{name}</h1>
            <h1 className="text-[#94949e]">By @{user__username}</h1>
          </div>
        </div>
      </div>
    );
  };
    
  const userData = cardDataList.filter((user) => user.user__username === id);
  const {
    name,
    title,
    user__username,
  } = userData[0];


  return (
    <div className="flex min-h-screen justify-center items-center px-4">
      <div className="flex flex-col justify-between items-center h-[90%] w-[100vw] md:w-[75%] px-4 ">
        <div className="flex flex-col my-5 justify-center items-center">
          <img src="" alt="" className="rounded-[50%] h-[48px] w-[48px]" />
          <h1>{name}</h1>
          <h1>{title}</h1>
          <h1>By @{user__username}</h1>
        </div>
        <div className="flex justify-center mx-auto items-center">
          <div className="flex  h-[60vh] flex-col justify-between  w-[80vw] ">
            <div className="flex items-center">
              <img src={NO_IMG_URL} alt="avatar" className="rounded-full mx-2 h-[48px] w-[48px]" />
              {name} <span className="mx-2 px-4 rounded-3xl bg-[#26272b]">c.ai</span>
            </div>
            <div className="felx justify-between w-[100%] md:w-[80%] bg-[#202024] border-2 border-[#303136] rounded-3xl">
              <input type="text" placeholder={`Message ${name} ...`} className="w-[95%] bg-[#202024] outline-none rounded-3xl pl-4 py-2" />
              📩
            </div>
          </div>
        </div>
      </div>
      {renderProfileDetails()}
    </div>
  );
};

export default Chat;
