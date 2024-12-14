import React from 'react';
import Link from 'next/link';
import { Post } from '../Types/Post';
import Tag from './Tag';

export default function PostItem({ post }: { post: Post }): React.ReactNode {
  const { title, tags, date, description } = post;
  return (
    <div className="pb-8">
      <div>
        {tags.map((tag, i) => (
          <Tag key={(tag + i).toString()} tag={tag} />
        ))}
      </div>
      <h1 className="text-[1.4rem] sm:text-[1.5rem] md:text-[1.4rem] lg:text-[1.7rem] font-[500] mb-1 group-hover:text-FCmain">
        {title}
      </h1>
      <p className="text-[#969696]">{description}</p>
      <p className="text-[#969696]">{date}</p>
    </div>
  );
}
