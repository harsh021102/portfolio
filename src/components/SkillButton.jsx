import React from 'react'
import { motion } from "framer-motion"

const buttonVariant = {
  hover: {
    scale: 1.1,
    transition: {
      ease: 'easeInOut'
    } 
  }
}

const SkillButton = ({skill}) => {
  return (
    <motion.div className='flex items-center justify-center bg-[#ffffff33] backdrop-blur-lg py-[0.75rem] px-[1.25rem] gap-[0.5rem] h-[3.5rem] cursor-pointer'
    variants={buttonVariant}
    whileHover="hover"
    >
        <h1 className='text-white font-inter font-thin leading-8 text-[1.25rem]'>{skill}</h1>
    </motion.div>
  )
}

export default SkillButton