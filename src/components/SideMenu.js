import React from 'react'
import { Link } from 'react-router-dom'
import GoogleSignInButton from './GoogleSignInButton'

const SideMenu = () => {
  return (
    <div className='flex  flex-col justify-between w-[15%] bg-[#131316] text-white border-l border-2 px-4 border-[#26272b]'>
      <div className='flex flex-col justify-between min-h-screen'> 
         <div className='flex flex-col'>
        <h1 className='text-xl font-semibold px-1 my-2 '>Embed.Ai</h1>
        <Link to="/character/new" className='text-xl font-semibold rounded-2xl px-6 py-1 my-5 bg-[#3f4347]'>
          + Create
        </Link>
        <Link to="/" className='px-6 py-2 rounded-sm my-2 bg-[#3f4347]'>🚀 Discovery</Link>
        </div>
        <GoogleSignInButton/>
    </div></div>
  ) 
}

export default SideMenu