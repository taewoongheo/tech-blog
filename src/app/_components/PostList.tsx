import React from 'react';
import Link from 'next/link';
import { Post } from '../_types/Post';
import PostItem from './PostItem';

export default function PostList({
  posts,
}: {
  posts: Post[];
}): React.ReactNode {
  return (
    <section>
      <div className="flex flex-col items-center w-full px-[1rem] sm:px-[2rem]">
        {posts.map((post) => (
          <Link
            key={post.slug.toString()}
            href={`post/${post.slug}`}
            className="group w-full sm:max-w-[600px] md:max-w-[600px] lg:max-w-[620px]"
          >
            <PostItem post={post} />
          </Link>
        ))}
      </div>
    </section>
  );
}
