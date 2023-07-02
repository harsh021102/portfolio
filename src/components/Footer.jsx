import React from 'react'
import {AiOutlineCopyright,AiOutlineInstagram,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className='flex justify-between items-center flex-col gap-4 md:gap-0 md:flex-row md:px-[5rem] pt-[2.5rem] pb-[4rem]'>
        <div className='flex justify-center items-center text-white'>
            <AiOutlineCopyright/>
            <h1> 2023 - Developed by Harsh Pratap Singh</h1>
        </div>
        <div className='flex justify-center items-center text-white font-inter font-semibold text-4xl gap-16 py-2'>
            <AiOutlineInstagram onClick={()=>openInNewTab('https://www.instagram.com/h_.a._.r._.s._h/')} className='hover:cursor-pointer'/>
            <AiFillGithub onClick={()=>openInNewTab('https://github.com/harsh021102')} className='hover:cursor-pointer'/>
            <AiFillLinkedin onClick={()=>openInNewTab('https://www.linkedin.com/in/harsh-pratap-singh-17b02722b/')} className='hover:cursor-pointer'/>
        </div>
    </div>
  )
}

export default Footer