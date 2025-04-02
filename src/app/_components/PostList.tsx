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
      <div className="grid grid-cols-1 gap-8 max-w-[700px] mb-24">
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
