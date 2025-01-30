import React from 'react';
import Image from 'next/image';
import { Post } from '../Types/Post';
import Tag from './Tag';

export default function PostItem({ post }: { post: Post }): React.ReactNode {
  const { title, tags, date, description, thumbnail } = post;
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const dates = date.slice(8, 9);
  return (
    <div className="flex justify-between">
      <div className="pb-8">
        <h1 className="font-[500] text-[1.2rem] sm:text-[1.4rem] mb-[0.2rem] group-hover:text-main">
          {title}
        </h1>
        <p className="text-[#969696] text-[0.8rem] sm:text-[0.9rem] mb-[0.8rem]">
          {description}
        </p>
        <p className="text-[#969696] text-[0.8rem] sm:text-[0.9rem]">
          {`${year}.${month.length >= 2 ? month : `0${month}`}.${dates.length >= 2 ? dates : `0${dates}`}`}
        </p>
        <div>
          {tags.map((tag, i) => (
            <Tag key={(tag + i).toString()} tag={tag} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-start pr-1">
        <div className="relative w-full max-w-[600px] aspect-[600/380] mx-4 my-10">
          {/* 이미지 흑백화 */}
          <Image
            src={thumbnail}
            alt=""
            fill
            style={{ objectFit: 'cover', borderRadius: '8px' }}
          />
        </div>
      </div>
    </div>
  );
}
