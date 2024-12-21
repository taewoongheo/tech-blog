import React from 'react';
import { Post } from '../Types/Post';
import Tag from './Tag';

export default function PostItem({ post }: { post: Post }): React.ReactNode {
  //{thumnail} = post
  const { title, tags, date, description } = post;
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const dates = date.slice(8, 9);
  return (
    <div className="flex">
      <div className="flex-[0.8_0_0%] pb-8">
        <div>
          {tags.map((tag, i) => (
            <Tag key={(tag + i).toString()} tag={tag} />
          ))}
        </div>
        <h1 className="font-[500] text-[1.2rem] sm:text-[1.5rem] md:text-[1.4rem] lg:text-[1.7rem] mb-1 group-hover:text-FCmain">
          {title}
        </h1>
        <p className="text-[#969696] text-[0.8rem] sm:text-[1rem]">
          {description}
        </p>
        <p className="text-[#969696] text-[0.8rem] sm:text-[1rem]">
          {year}.{month.length >= 2 ? month : `0${month}`}.
          {dates.length >= 2 ? dates : `0${dates}`}
        </p>
      </div>
      <div className="flex-[0.3_0_0%] justify-center items-start sm:items-center flex">
        <div className="outline w-16 h-16 sm:w-sm sm:h-sm md:w-md md:h-md lg:w-lg lg:h-lg xl:w-xl xl:h-xl rounded-sm">
          no image
        </div>
      </div>
    </div>
  );
}
