import React from 'react';
import TREE_ASCII from '@/app/_constants/ascii/tree';

export default function TreeAscii(): React.ReactNode {
  return (
    <pre className="text-[2.4px] sm:text-[2.6px] lg:text-[2.8px] xl:text-[3px]">
      {TREE_ASCII}
    </pre>
  );
}
