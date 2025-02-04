import React from 'react';
import TREE_ASCII from '@/app/_constants/ascii/tree';

export default function TreeAscii(): React.ReactNode {
  return (
    <pre
      className="text-[2.4px] sm:text-[2.6px] lg:text-[2.8px] xl:text-[3px]
      leading-[3.4px] sm:leading-[3.7px] lg:leading-[3.8px] xl:leading[4.3px]
        whitespace-pre
        font-mono
        tracking-[0]
        [word-spacing:0]"
    >
      {TREE_ASCII}
    </pre>
  );
}
