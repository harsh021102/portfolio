import React from 'react'
import {waves} from '../utils/images'
import { skills } from '../utils/skills'
import SkillButton from '../components/SkillButton'
const Description = () => {
  return (
    <section className='flex overflow-hidden mt-56'>

      <img src={waves} alt="waves"  className="absolute w-full bg-contain bg-no-repeat h-full"/>
      <section className='flex px-[2rem] md:px-[7.5rem] py-[8rem] md:py-[5rem] flex-col items-start'>
          <div className='flex md:flex-col gap-20 md:gap-40 w-full flex-wrap'>
            <div className='md:flex'>
              <h1 className='md:w-7/12 text-[3em] md:text-[4em] font-inter font-medium text-left md:pr-[10rem] text-white'>Bring Ideas to Life Through Design</h1>
              <h1 className='flex mt-2 md:mt-0 md:w-8/12 text-[1.1em] md:text-xl font-light text-justify leading-[2rem] font-inter text-white '>I'm a UI Designer with 8 years of experience creating engaging interfaces for web and mobile applications. I prioritize user experience and am committed to staying up-to-date with the latest trends and technologies. I work collaboratively with clients and team members to ensure that each project meets the unique needs and goals of the client.
              <br/> 
              <br/> 
              Let's create something great together!
              </h1>
            </div>
            <div className='flex flex-col gap-8 justify-center items-start mb-12 md:mb-14'>
              <h1 className="flex flex-wrap text-white text-4xl font-inter font-normal">Highlighted Skills</h1>
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

export default Description