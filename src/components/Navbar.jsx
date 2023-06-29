import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center md:justify-between items-center py-4 md:py-6 px-20 relative'>
        <h1 className='text-4xl font-inter font-extrabold text-white leading-normal tracking-tight'>HPortfolio</h1>
        <div className="hidden md:flex gap-6 justify-between items-center">
            <button className='text-2xl p-2 flex items-center justify-center gap-2 leading-5 font-medium font-inter text-white'>Home</button>
            <button className='text-2xl p-2 flex items-center justify-center gap-2 leading-5 font-medium font-inter text-white'>Projects</button>
            <button className='text-2xl p-2 flex items-center justify-center gap-2 leading-5 font-medium font-inter text-white'>About</button>
        </div>
    </div>
  )
}

export default Navbar