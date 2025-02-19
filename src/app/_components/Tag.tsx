import React from 'react';
import { Categories } from '../_types/Category';

export default function Tag({ tag }: { tag: Categories }) {
  return (
    <span
      className="
      inline-block
      font-sans
      text-[15px]
      mr-[7px]
      lg:text-[16px]
      text-main
      font-main
      font-[500]
    "
    >
      #{tag}
    </span>
  );
}
