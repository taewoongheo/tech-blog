import React from 'react';
import WAVE_ASCII from '@/app/_constants/ascii/wave';

export default function WaveAscii(): React.ReactNode {
  return (
    <pre
      className="text-[1.9px] xl:text-[2px] leading-[2.5px] xl:leading-[2.6px]
        whitespace-pre
        font-mono
        tracking-[0]
        [word-spacing:0]"
    >
      {WAVE_ASCII}
    </pre>
  );
}
