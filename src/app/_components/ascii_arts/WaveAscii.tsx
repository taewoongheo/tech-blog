import React from 'react';
import WAVE_ASCII from '@/app/_constants/ascii/wave';

export default function WaveAscii(): React.ReactNode {
  return (
    <pre
      className="text-[2px] leading-[1.3]
        whitespace-pre
        font-mono
        tracking-[0]
        [word-spacing:0]"
    >
      {WAVE_ASCII}
    </pre>
  );
}
