import React from 'react'

const Banner = () => {
  return (
    <div className='w-full h-4/6 relative flex flex-col justify-center items-center border-2 border-black gap-6'>
        <h1 className='text-[7.5em] font-normal text-white font-inter'>Harsh Pratap Singh</h1>
        <h2 className='text-3xl text-[#A1A1A1] text-[2.5rem] font-inter font-light'>Crafting pixel-perfect designs that <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#FFC700] to-[#FF7A00]'>bring ideas to life</span></h2>
    </div>
  )
}
export default Banner