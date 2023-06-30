import React from 'react'

const SkillButton = ({skill}) => {
  return (
    <div className='flex items-center justify-center bg-[#ffffff33] backdrop-blur-lg py-[0.75rem] px-[1.25rem] gap-[0.5rem] h-[3.5rem]'>
        <h1 className='text-white font-inter font-thin leading-8 text-[1.25rem]'>{skill}</h1>
    </div>
  )
}

export default SkillButton