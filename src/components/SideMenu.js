import React from 'react'

const SideMenu = () => {
  return (
    <div className='flex  flex-col justify-between w-[15%] bg-[#131316] text-white border-l border-2 px-4 border-[#26272b]'>
        <div className='flex flex-col'>
        <h1 className='text-xl font-semibold px-1 my-2 '>Embed.Ai</h1>
        <button className='text-xl font-semibold rounded-2xl px-6 py-1 my-5 bg-[#3f4347]'>+ Create</button>
        <button className='px-6 py-2 rounded-sm my-2 bg-[#3f4347]'>🚀 Discovery</button>
        </div>
        <button className='bg-white rounded-3xl text-black w-[100%] py-2 '>Sign in</button>
    </div>
  ) 
}

export default SideMenu