import React from 'react';
import TypingIntro from './TypingIntro';

export default function Intro(): React.ReactNode {
  return (
    <header className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] mb-10">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full
            bg-[repeating-linear-gradient(0deg,rgb(200,210,220,0.3)_0px,rgb(200,210,220,0.3)_1px,transparent_1px,transparent_35px),repeating-linear-gradient(90deg,rgb(200,210,220,0.3)_0px,rgb(200,210,220,0.3)_1px,transparent_1px,transparent_35px)]
            md:bg-[repeating-linear-gradient(0deg,rgb(200,210,220,0.3)_0px,rgb(200,210,220,0.3)_1px,transparent_1px,transparent_40px),repeating-linear-gradient(90deg,rgb(200,210,220,0.3)_0px,rgb(200,210,220,0.3)_1px,transparent_1px,transparent_40px)]
          "
        />

        <div
          className="absolute inset-0 w-full h-full
          bg-[radial-gradient(ellipse_100%_60%_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,1)_70%)]
          md:bg-[radial-gradient(ellipse_60%_60%_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,1)_70%)]
          "
        />
      </div>

      {/* 컨텐츠 */}
      <div className="z-10 flex flex-col lg:flex-row h-full">
        <div className="flex-1 flex flex-col justify-center items-center md:min-w-[400px]">
          <h1 className="text-main font-main text-[2rem] md:text-[2.2rem] font-[600] lg:mb-2">
            허태웅 기술 블로그
          </h1>
          <TypingIntro />
        </div>
      </div>
    </header>
  );
}
