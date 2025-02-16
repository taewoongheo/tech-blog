import React from 'react';
import { Categories } from '../_types/Category';

export default function Tag({ tag }: { tag: Categories }) {
  return (
    <span
      className="
      inline-block
      mr-[10px]
      font-sans
      text-sm
      lg:text-[15px]
      text-main
      font-main
      font-[500]
    "
    >
      #{tag}
    </span>
  );
}
