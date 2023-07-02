import React from 'react'

const Banner = () => {
  return (
    <div className='w-full md:h-4/6 relative flex flex-col justify-center items-center md:gap-4 mt-12 lg:mt-32 py-8'>
        <h1 className='relative text-[2.5em] font-bold md:text-[5em] lg:text-[7.5em] md:font-normal text-white font-inter text-center'>
          Harsh Pratap Singh
        </h1>
        <h2 className='relative text-center text-xl md:text-2xl lg:text-3xl text-[#A1A1A1] text-[2.5rem] font-inter font-light'>
          Crafting pixel-perfect designs that <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#FFC700] to-[#FF7A00]'>bring ideas to life
          </span>
        </h2>
    </div>
  )
}
export default Banner