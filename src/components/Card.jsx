import React from 'react'
import { mobile } from '../utils/images'

const Card = ({title,duration,point_1,point_2,tech,role,link,image}) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className='w-full flex  bg-[#ffffff1a] flex-col rounded-md'>
        <img src={image} alt="thumbnail" className='rounded-md bg-contain'/>
        <div className='flex flex-col px-[1.5rem] pt-[2rem] pb-[1.5rem]'>
          <div className='flex justify-between items-center'>
            <h1 className='text-[2.5em] font-inter font-bold underline underline-offset-4 decoration-1'>{title}</h1>
            <h6 className='text-[.75em] font-light '>{duration}</h6>
          </div>
          <div className='flex flex-col mt-1 gap-2'>
            <h1 className='font-inter text-[1em] font-light'>{point_1}</h1>
            <h1 className='font-inter text-[1em] font-light'>{point_2}</h1>
            <h1 className=' text-lg font-inter font-semibold'>Tech Used: <span className='font-light font-inter'>{tech}</span></h1>
          </div>
          <div className='mt-6 flex justify-between items-center mb-4 border-t-2 border-[
#ffffff26]'>
            <div className='flex flex-col item-center justify-center md:flex-row my-4'>
              <h1 className=' text-lg font-inter font-semibold'>Role: <span className='font-light font-inter'>Web Developer</span></h1>
            </div>
            <div className='flex item-center justify-center'>
              <button className='text-normal md:text-lg font-inter font-semibold' onClick={()=>openInNewTab(link)}>{`Link ->`}</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card