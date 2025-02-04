import React from 'react';
import GUITAR_ASCII from '@/app/_constants/ascii/guitar';

export default function AtomAscii(): React.ReactNode {
  return (
    <pre
      className="text-[1.9px] xl:text-[2px] leading-[2.5px] xl:leading-[2.7px]
        whitespace-pre
        font-mono
        tracking-[0]
        [word-spacing:0]"
    >
      {GUITAR_ASCII}
    </pre>
  );
}
