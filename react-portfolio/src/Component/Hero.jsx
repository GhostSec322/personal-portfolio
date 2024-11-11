import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/kevinRushProfile.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16"> {/* gap-16으로 변경 */}
        
        {/* 텍스트 섹션 */}
        <div className="ml-20 flex flex-col items-center lg:items-start justify-center">
          <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
            Ghost Sec
          </h1>
          <span className="bg-gradient-to-r from-white from-green-50 via-green-100 to-green-200 bg-clip-text text-4xl tracking-tight text-transparent">
            Bug Hunter / Backend Developer
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter leading-relaxed">
            {HERO_CONTENT}
          </p>
        </div>

        {/* 이미지 섹션 */}
        <div className="flex justify-center">
          <img className="rounded-2xl" src={profilePic} alt="GhostSec" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
