import React from 'react';
import PostList from './_components/PostList';
import { getAllPostFrontMatter } from './_utils/getPosts';
import Intro from './_components/Intro';

/**
 * html tag 로 seo 보완
 */
export default async function Main(): Promise<React.ReactElement> {
  const posts = await getAllPostFrontMatter();
  return (
    <div className="w-full h-full flex flex-col align-start px-all sm:px-sm md:px-md lg:px-lg xl:px-xl">
      {/* min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] */}
      <div className="flex min-h-all sm:min-h-sm md:min-h-md lg:min-h-lg xl:min-h-xl justify-center items-center">
        <Intro />
      </div>
      <PostList posts={posts} />
    </div>
  );
}
