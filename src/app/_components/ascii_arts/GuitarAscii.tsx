import React from 'react';
import GUITAR_ASCII from '@/app/_constants/ascii/guitar';

export default function AtomAscii(): React.ReactNode {
  return (
    <pre
      className="text-[2px] leading-[1.2]
        whitespace-pre
        font-mono
        tracking-[0]
        [word-spacing:0]"
    >
      {GUITAR_ASCII}
    </pre>
  );
}
