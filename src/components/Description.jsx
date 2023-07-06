import React, { forwardRef } from 'react'
import {waves} from '../utils/images'
import { skills } from '../utils/skills'
import SkillButton from '../components/SkillButton'
import { descriptionText } from '../utils/description'
const Description = (props,description) => {

  return (
    <section className='description flex overflow-hidden mt-56' ref={description}>
      <img src={waves} alt="waves"  className="absolute w-full bg-contain bg-no-repeat h-full"/>
        <section className='flex px-[2rem] md:px-[7.5rem] py-[8rem] md:py-[5rem] flex-col items-start'>
            <div className='flex md:flex-col gap-20 md:gap-40 w-full flex-wrap'>
              <div className='flex flex-col lg:flex-row'>
                <h1 className='relative w-full lg:w-7/12 text-[3em] md:text-[4em] font-inter font-medium text-left md:pr-[10rem] text-white '>Bring Ideas to Life through 
                  <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#FFC700] to-[#FF7A00]'> ReactJS</span>
                </h1>
                <div className=' relative flex flex-col mt-2 md:mt-0 w-full lg:w-8/12 text-[1.1em] md:text-xl font-light text-justify leading-[2rem] font-inter text-white'>
                <h1 className='mt-2'>{descriptionText.para1}</h1>
                <h1 className='mt-2'>{descriptionText.para2}</h1>
                <h1 className='mt-2'>{descriptionText.wishes}</h1>
                <h1>{descriptionText.name}</h1>
                </div>
              </div>
              <div className='flex flex-col gap-8 justify-center items-start mb-12 md:mb-14'>
                <h1 className="flex flex-wrap text-white text-4xl font-inter font-normal underline underline-offset-4 decoration-1">Highlighted Skills</h1>
                <div className='flex gap-6 flex-wrap'>{
                  skills.map((item) => <SkillButton key={item.id} skill={item.skill} />)
                }
                </div>
              </div>
            </div>
        </section>
    </section>
  )
}

export default forwardRef(Description);