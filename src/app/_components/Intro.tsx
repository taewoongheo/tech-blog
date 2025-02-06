import React from 'react';
import SaturnAscii from './ascii_arts/SaturnAscii';
import GuitarAscii from './ascii_arts/GuitarAscii';
import WaveAscii from './ascii_arts/WaveAscii';
import HeadphoneAscii from './ascii_arts/HeadphoneAscii';
import TreeAscii from './ascii_arts/TreeAscii';

export default function Intro(): React.ReactNode {
  return (
    <header>
      <div className="flex flex-col lg:flex-row justify-center items-center py-20">
        <div className="flex-1 flex flex-col justify-center h-full min-w-[300px]">
          <div className="flex justify-center">
            <TreeAscii />
          </div>
          <div className="hidden lg:flex justify-end mt-20">
            {/* mt = section height */}
            <WaveAscii />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center md:min-w-[400px]">
          <h1 className="text-main font-main text-[1.8rem] lg:text-[2.2rem]  font-[600] lg:mb-2">
            허태웅 기술 블로그
          </h1>
          <p className="text-main font-main opacity-70 text-[1rem] lg:text-[1.2rem] font-[500]">
            배우고 고민한 흔적들을 공유합니다
          </p>
          <p className="text-main font-main opacity-70 text-[1rem] lg:text-[1.2rem] font-[500]">
            깊게 고민하고 쉽게 설명하려 노력해요
          </p>
        </div>

        <div className="flex-1 hidden lg:flex min-h-[470px] min-w-[300px]">
          <div className="flex pt-[10rem]">
            <HeadphoneAscii />
          </div>
          <div className="flex flex-col justify-around">
            <SaturnAscii />
            <GuitarAscii />
          </div>
        </div>
      </div>
    </header>
  );
}
