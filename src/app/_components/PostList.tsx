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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16 max-w-[1200px] mb-24">
        {posts.map((post) => (
          <Link
            key={post.slug.toString()}
            href={`post/${post.slug}`}
            className="group w-full"
          >
            <PostItem post={post} />
          </Link>
        ))}
      </div>
    </section>
  );
}
