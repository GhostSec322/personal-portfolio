import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/kevinRushProfile.jpg"
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'> 
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
            Ghost Sec
            </h1>  
            <span className="bg-gradient-to-r from-green-50 via-green-200 to-green-500 bg-clip-text text-4xl tracking-tight text-transparent">
                BugHunter / Backend Developer
                </span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                {HERO_CONTENT}
                </p>
        </div>
       
    </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <img src={profilePic} alt="" srcset="" />
            
            </div>
            </div>
      </div>
    </div>
  )
}

export default Hero