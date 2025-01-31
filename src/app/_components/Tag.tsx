import React from 'react';
import { Categories } from '../Types/Category';

export default function Tag({ tag }: { tag: Categories }) {
  return (
    <span
      className="
      inline-block
      mr-1
      font-sans
      text-md
      text-main
      font-main
      font-[500]
    "
    >
      #{tag}
    </span>
  );
}
