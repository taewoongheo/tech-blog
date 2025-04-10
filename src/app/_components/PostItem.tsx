import React from 'react';
import { Post } from '../_types/Post';
import Tag from './Tag';
import { formatRowDateForDisplay } from '../_utils/date-utils';

export default function PostItem({ post }: { post: Post }) {
  const { title, tags, date, description } = post;
  const [year, month, dates] = formatRowDateForDisplay(date);

  return (
    <article>
      <div className="hover:cursor-pointer group mb-2">
        <div>
          {/* Tags */}
          <div className="flex mb-2">
            {tags.map((tag) => (
              <Tag key={tag.toString()} tag={tag} />
            ))}
          </div>

          {/* Title */}
          <h1 className="text-[1.2rem] md:text-[1.3rem] line-clamp-1 md:line-clamp-none font-main font-[500] mb-2 group-hover:text-main">
            {title}
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm lg:text-[15px] mb-2 font-main">
            {description}
          </p>

          {/* Date */}
          <p className="text-gray-400 text-sm lg:text-[15px] font-main">
            {`${year}.${month.length >= 2 ? month : `0${month}`}.${dates.length >= 2 ? dates : `0${dates}`}`}
          </p>
        </div>
      </div>
    </article>
  );
}
