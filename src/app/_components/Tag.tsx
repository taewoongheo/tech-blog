import React from 'react';
import { Categories } from '../_types/Category';

export default function Tag({ tag }: { tag: Categories }) {
  return (
    <span
      className="
      inline-block
      mr-1
      font-sans
      text-sm
      lg:text-base
      text-main
      font-main
      font-[500]
    "
    >
      #{tag}
    </span>
  );
}
