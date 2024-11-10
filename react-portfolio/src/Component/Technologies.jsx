import React from 'react'
import {RiReactjsLine} from"react-icons/ri"
import {FaPython ,FaNodeJs ,FaPhp} from "react-icons/fa"
import {SiMongodb, SiAssemblyscript} from 'react-icons/si'
import { DiMysql } from "react-icons/di";
import { PiFileCppLight } from "react-icons/pi";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className='text-7xl'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className='text-7xl text-blue-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <PiFileCppLight  className='text-7xl text-white'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAssemblyscript  className='text-7xl text-white'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPhp className='text-7xl text-white'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
