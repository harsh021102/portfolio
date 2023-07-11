import React from 'react'
import resume from '../files/Resume.pdf'
import { easeInOut, motion } from "framer-motion"
import Typewriter from 'typewriter-effect';

const downAnimation = {
  hidden: {
    y: -50,
    opacity:0
  },
  visible: {
    y: 0,
    opacity: 1, 
    transition: {
      duration: 0.6,
      type: 'spring',
      bounce: 0.2,
      delay: 1,
    }
  }
}

const Banner = () => {
  return (
    <motion.div className='w-full md:h-4/6 relative flex flex-col justify-center items-center md:gap-4 mt-12 lg:mt-32 py-8 '
          variants={downAnimation}
          initial="hidden"
          animate="visible">
        <motion.h1 className='relative text-[2.5em] font-bold md:text-[5em] lg:text-[7.5em] md:font-normal text-white font-inter text-center'
        initial={{opacity:0 }}
        animate={{opacity:1, transition: {
          duration: 1.1,
          ease: 'easeInOut'
        }}}
        >
          Harsh Pratap Singh
        </motion.h1>
        <motion.h2 className='relative gap-2 flex text-center text-xl md:text-2xl lg:text-3xl text-[#A1A1A1] text-[2.5rem] font-inter font-light'>
        Crafting websites to 
        <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-[#FFC700] to-[#FF7A00]'
        >
          <Typewriter className='text-transparent bg-clip-text bg-gradient-to-br from-[#FFC700] to-[#FF7A00]'
            options={{
              strings: ['perfection', 'reality','impress'],
              autoStart: true,
              loop: true,
              pauseFor: 1500,
            }}
            />
          </h1>
        </motion.h2>
        <a href={resume} target='_blank' rel="noreferrer" className='mt-20 md:mt-0'
        
        >
          <motion.button className='text-white bg-gradient-to-br from-[#5200FF] to-[#3D00BD] rounded-3xl px-[1.75rem] py-[.75rem] font-inter font-light text-lg mt-4'
          >{`Resume ->`}</motion.button>
        </a>
    </motion.div>
  )
}
export default Banner