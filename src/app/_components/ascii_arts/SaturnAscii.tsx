import React from 'react';
import SATURN_ASCII from '@/app/_constants/ascii/saturn';

export default function SaturnAscii(): React.ReactNode {
  return (
    <pre
      className="text-[3.8px] leading-[1.3]
        whitespace-pre
        font-mono
        tracking-[0]
        [word-spacing:0]"
    >
      {SATURN_ASCII}
    </pre>
  );
}
