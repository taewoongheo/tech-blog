import React from 'react';
import Image from 'next/image';
import Tag from '@/app/_components/Tag';
import { Categories } from '@/app/_types/Category';
import { formatRowDateForDisplay } from '@/app/_utils/date-utils';
import { Post } from '@/app/_types/Post';

export default function Overview({ mdxMetadata }: { mdxMetadata: Post }) {
  const { title, thumbnail, description, tags, date } = mdxMetadata;
  const [year, month, dates] = formatRowDateForDisplay(date);

  return (
    <div className="flex flex-col items-center justify-center mt-10 lg:mt-20">
      <div className="flex flex-col w-full items-start space-y-6">
        {/* Tags */}
        <div>
          {tags.map((tag: Categories) => (
            <Tag key={tag.toString()} tag={tag} />
          ))}
        </div>
        {/* Title */}
        <h1 className="font-main text-4xl lg:text-5xl font-[600] leading-[2.8rem] lg:leading-[4rem] mb-3">
          {title}
        </h1>
        <div className="space-y-3">
          <p className="font-main text-[#969696] text-[17px]">{description}</p>
          <p className="font-main text-[#969696] text-[17px]">
            {' '}
            {`${year}.${month.length >= 2 ? month : `0${month}`}.${dates.length >= 2 ? dates : `0${dates}`}`}
          </p>
        </div>
      </div>

      {/* Thumbnail Image */}
      <div className="relative w-full max-w-[700px] aspect-[600/380] my-24">
        <Image
          src={thumbnail}
          alt=""
          fill
          style={{ objectFit: 'cover', borderRadius: '6px' }}
        />
      </div>
    </div>
  );
}
