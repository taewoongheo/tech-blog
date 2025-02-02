import React from 'react';
import Image from 'next/image';
import { Post } from '../_types/Post';
import Tag from './Tag';

export default function PostItem({ post }: { post: Post }) {
  const { title, tags, date, description, thumbnail } = post;
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const dates = date.slice(8, 9);

  return (
    <div className="flex justify-between items-center hover:cursor-pointer group gap-4">
      {/* Content Section */}
      <div className="flex-1">
        {/* Tags */}
        <div className="flex gap-2 mb-2">
          {tags.map((tag) => (
            <Tag key={tag.toString()} tag={tag} />
          ))}
        </div>

        {/* Title */}
        <h1 className="text-[21px] font-main font-[500] mb-2 group-hover:text-main">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-2 font-main line-clamp-2">
          {description}
        </p>

        {/* Date */}
        <p className="text-gray-400 text-sm font-main">
          {`${year}.${month.length >= 2 ? month : `0${month}`}.${dates.length >= 2 ? dates : `0${dates}`}`}
        </p>
      </div>

      {/* Thumbnail */}
      <div className="relative w-[150px] aspect-[1.2/1] rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={thumbnail}
          alt=""
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105 filter grayscale"
        />
      </div>
    </div>
  );
}
