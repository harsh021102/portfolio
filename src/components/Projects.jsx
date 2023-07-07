import React, { forwardRef, useEffect, useRef } from 'react'
import Card from './Card'
import { projects } from '../utils/projects'
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
      delay: 0.8,
    }
  }
}


const Projects = (props,project) => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once: true})
  const mainControls = useAnimation()

  useEffect(()=>{
    if(isInView)
    {
      mainControls.start("visible")
    }
  },[isInView])
  return (
    <div className='h-full text-white px-4 md:px-[5rem] py-[7.5rem]'>
        <motion.div className='grid grid-cols-1 lg:grid-cols-2 auto-rows-auto xl:grid-cols-3 gap-9 justify-end items-center'
        variants={animation}
        initial="hidden"
        animate={mainControls} ref={project}>
            <div className='col-span-1 lg:col-span-2 xl:col-span-3 flex flex-col justify-center items-start'            
            ref={ref}>
                <h1 className='text-[3em] md:text-[4rem] font-inter font-medium underline underline-offset-4 decoration-1'>My Projects</h1>
                <h1  className='text-[1.5em] md:text-[2.5rem] font-inter font-thin'>Transforming Ideas into Stunning Frontend Experiences with ReactJS.</h1>
            </div>
            {
              projects.map((item)=>{return <Card key={item.id} title={item.title} duration={item.duration} point_1={item.point_1} point_2={item.point_2} tech={item.tech} role={item.role} link={item.link} image={item.image} />})
            }
        </motion.div>
    </div>
  )
}

export default forwardRef(Projects)