import React from 'react';
import HEADPHONE_ASCII from '@/app/_constants/ascii/headphone';

export default function HeadphoneAscii(): React.ReactNode {
  return (
    <pre
      className="text-[1.2px] leading-[1.3]
        whitespace-pre
        font-mono
        tracking-[0]
        [word-spacing:0]"
    >
      {HEADPHONE_ASCII}
    </pre>
  );
}
