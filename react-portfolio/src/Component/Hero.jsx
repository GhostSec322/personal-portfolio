import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/kevinRushProfile.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text section */}
        <div className="flex flex-col items-center lg:items-start justify-center">
          <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
            Ghost Sec
          </h1>
          <span className="bg-gradient-to-r from-white from-green-50 via-green-100 to-green-200 bg-clip-text text-4xl tracking-tight text-transparent">
            Bug Hunter / Backend Developer
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
            {HERO_CONTENT}
          </p>
        </div>

        {/* Image section */}
        <div className="flex justify-center">
          <img className="rounded-2xl" src={profilePic} alt="GhostSec" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
