import React from 'react'
import { motion } from "framer-motion"

const downAnimation = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
      type: 'spring',
      bounce: 0.2,
      delay: 0.8
    }
  }
}

const Navbar = ({description,project,scrollToSection}) => {
  return (
    <motion.div className='w-full flex justify-center md:justify-between items-center py-4 md:py-6 px-20 relative '
    variants={downAnimation}
    initial="hidden"
    animate="visible"
    >
        <h1 className='md:hidden text-4xl font-inter font-bold text-white leading-normal tracking-tight'>HP</h1>
        <h1 className='hidden md:flex text-4xl font-inter font-extrabold text-white leading-normal tracking-tight'>HPortfolio</h1>
        <div className="hidden md:flex gap-6 justify-between items-center">
            <button className='text-2xl p-2 flex items-center justify-center gap-2 leading-5 font-medium font-inter text-white' onClick={()=>scrollToSection(project)}>Projects</button>
            <button className='text-2xl p-2 flex items-center justify-center gap-2 leading-5 font-medium font-inter text-white' onClick={()=>scrollToSection(description)}>About</button>
        </div>
    </motion.div>
  )
}

export default Navbar