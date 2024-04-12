import React from "react";
import useCommentFormatter from "../custom-hooks/useCommentFormatter";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NO_IMG_URL } from "../utils/constants";

const CardItem = ({ cardData }) => {
  // Always call useCommentFormatter, without any conditions
  const commentsCount = useCommentFormatter({
    count: cardData?.participant__num_interactions || 0,
  });

  return (
    <Link
      to={`chat/${cardData.user__username}`}
      className="flex bg-[#202024] rounded-md mx-2 my-2 px-4 py-2 w-[320px] h-[150px] hover:bg-[#2a2a2d]"
    >
      <div className="w-[120px] h-[100%]  mr-2 rounded-md bg-[#6a6a6a] ">
        <img src={NO_IMG_URL} className="h-[100%]" alt="Icon No Download" />
      </div>
      <div className="flex flex-col ">
        <h1 className="font-semibold">{cardData?.name}</h1>
        <p className="text-[#a2a2ac]">By @{cardData?.user__username}</p>
        <p className="font-semibold text-sm "> {cardData?.title}</p>
        <p className="flex items-center text-[#a2a2ac] my-2 py-1">
          <FaComment className="mr-2" />
          {commentsCount}
        </p>
      </div>
    </Link>
  );
};

export default CardItem;
