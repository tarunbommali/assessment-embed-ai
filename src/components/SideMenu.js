import React from 'react'
import { Link } from 'react-router-dom'
import GoogleSignInButton from './GoogleSignInButton'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import ChatsList from './ChatsList';


const SideMenu = ({setDisplaySideMenu}) => {
  return (
    <div className='flex  flex-col justify-between '>
      <div className='flex flex-col justify-between min-h-screen'> 
         <div className='flex flex-col'>
        <h1 className='flex items-center justify-between text-xl font-semibold px-1 my-2 '>Embed.Ai <MdOutlineKeyboardDoubleArrowLeft onClick={() => setDisplaySideMenu()}/></h1>
        <Link to="/character/new" className='text-xl font-semibold rounded-2xl px-6 py-1 my-5 bg-[#3f4347]'>
          + Create
        </Link>
        <Link to="/" className='px-6 py-2 rounded-sm my-2 bg-[#3f4347]'>🚀 Discovery</Link>
        <div className='flex flex-col'>
          <h1 className='my-4 font-semibold'>Chats</h1>
          <ChatsList />
        </div>
        </div>
        <GoogleSignInButton/>
    </div></div>
  ) 
}

export default SideMenu