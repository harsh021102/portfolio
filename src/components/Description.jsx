import React, { forwardRef,useEffect,useRef } from 'react'
import {waves} from '../utils/images'
import { skills } from '../utils/skills'
import SkillButton from '../components/SkillButton'
import { descriptionText } from '../utils/description'
import { motion,useInView,useAnimation } from "framer-motion"

const animation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity:1,
    transition: {
      duration: 0.6,
      type: 'tween',
      bounce: 0.2,
      delay: 0.4,
      staggerChildren: 0.4
    }
  }
}
const animationSkill = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity:1,
    transition: {
      duration: 0.6,
      type: 'tween',
      bounce: 0.2,
      delay: 0.4,
    }
  }
}
const animationWaves = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity:1,
    transition: {
      duration: 0.9,
      type: 'tween',
    }
  }
}

const Description = (props,description) => {

  const ref = useRef(null);
  const refSkill = useRef(null);
  const isInView = useInView(ref,{once: true})
  const isSkillInView = useInView(refSkill,{once: true})
  const mainControls = useAnimation()
  const skillControls = useAnimation()
  useEffect(()=>{
    if(isInView)
    {
      mainControls.start("visible")
    }
    if(isSkillInView)
    {
      skillControls.start("visible")
    }
  },[isInView,isSkillInView])

  return (
    <section className='description flex overflow-hidden mt-96 md:mt-56' ref={description}>
      <motion.img src={waves} alt="waves"  className="absolute w-full bg-contain bg-no-repeat h-full" ref={ref} 
      variants={animationWaves}
      initial="hidden"
      animate={mainControls}
      />
        <section className='flex px-[2rem] md:px-[7.5rem] py-[8rem] md:py-[5rem] flex-col items-start'>
            <div className='flex md:flex-col gap-20 md:gap-8 w-full flex-wrap'>
              <div className='flex flex-col lg:flex-row'>
                <motion.h1 className='relative w-full lg:w-7/12 text-[3em] md:text-[4em] font-inter font-medium text-left md:pr-[10rem] text-white'
                variants={animation}
                initial="hidden"
                animate={mainControls}
                >Bring Ideas to Life through 
                  <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#FFC700] to-[#FF7A00]'> ReactJS</span>
                </motion.h1>
                <motion.div className=' relative flex flex-col mt-2 md:mt-0 w-full lg:w-8/12 text-[0.8em] md:text-xl font-light text-justify leading-[1.25rem] md:leading-[2rem] font-inter text-white'
                ref={ref}
                variants={animation}
                initial="hidden"
                animate={mainControls}
                >
                  <h1 className='mt-2'>{descriptionText.para1}</h1>
                  <h1 className='mt-2'>{descriptionText.para2}</h1>
                  <h1 className='mt-2'>{descriptionText.wishes}</h1>
                  <h1>{descriptionText.name}</h1>
                </motion.div>
              </div>
              <div className='flex flex-col gap-8 justify-center items-start mb-12 md:mb-0' ref={refSkill}>
                <motion.h1 className="flex flex-wrap text-white text-4xl font-inter font-normal underline underline-offset-4 decoration-1"
                variants={animationSkill}
                initial="hidden"
                animate={skillControls}
                >Highlighted Skills</motion.h1>
                <motion.div className='flex gap-6 flex-wrap'
                variants={animationSkill}
                initial="hidden"
                animate={skillControls}
                >{
                  skills.map((item) => <SkillButton key={item.id} skill={item.skill} />)
                }
                </motion.div>
              </div>
            </div>
        </section>
    </section>
  )
}

export default forwardRef(Description);