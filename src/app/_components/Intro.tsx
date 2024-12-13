import React from 'react';

export default function Intro(): React.ReactNode {
  return (
    // md:flex-row
    <section className="flex flex-col w-full h-full justify-end pb-3">
      {/* responsive: all*/}
      {/* <div className="flex-[0.6_0_0%] text-center bg-green-300 ">ascii art</div> */}

      <div className="flex-[0.4_0_0%] flex flex-col justify-center md:min-w-[300px]">
        <h1 className="text-FCmain text-FStitle font-FWtitle">
          허태웅 기술 블로그
        </h1>
        <p className="text-FCmain text-FSsub font-FWsub">
          배우고 고민한 흔적들을 공유합니다.
        </p>
        <p className="text-FCmain text-FSsub font-FWsub">
          깊게 고민하고 쉽게 설명하려 노력해요.
        </p>
      </div>

      {/* <div className="flex-[0.6_0_0%] hidden md:inline-block text-center bg-green-300">
        ascii art
      </div> */}
    </section>
  );
}
