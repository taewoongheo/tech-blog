import React from 'react';
import TREE_ASCII from '@/app/_constants/ascii/tree';

export default function TreeAscii(): React.ReactNode {
  return (
    <pre
      className="text-[3px]
      leading-[1.4]
        whitespace-pre
        font-mono
        tracking-[0]
        [word-spacing:0]"
    >
      {TREE_ASCII}
    </pre>
  );
}
