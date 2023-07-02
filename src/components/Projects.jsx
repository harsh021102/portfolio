import React, { forwardRef } from 'react'
import Card from './Card'
import { projects } from '../utils/projects'
const Projects = (props,project) => {
  return (
    <div className='project h-full text-white px-4 md:px-[5rem] py-[7.5rem]' ref={project}>
        <div className='grid grid-cols-1 lg:grid-cols-2 auto-rows-auto xl:grid-cols-3 gap-9 justify-end items-center'>
            <div className='col-span-1 lg:col-span-2 xl:col-span-3 flex flex-col justify-center items-start'>
                <h1 className='text-[3em] md:text-[4rem] font-inter font-medium underline underline-offset-4 decoration-1'>My Projects</h1>
                <h1  className='text-[1.5em] md:text-[2.5rem] font-inter font-thin'>Transforming Ideas into Stunning Frontend Experiences with ReactJS.</h1>
            </div>
            {
              projects.map((item)=>{return <Card key={item.id} title={item.title} duration={item.duration} point_1={item.point_1} point_2={item.point_2} tech={item.tech} role={item.role} link={item.link} image={item.image}/>})
            }
        </div>
    </div>
  )
}

export default forwardRef(Projects)