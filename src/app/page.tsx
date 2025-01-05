import React from 'react';
import PostList from './_components/PostList';
import { getAllPostFrontMatter } from './_utils/get-post';
import Intro from './_components/Intro';
import Navbar from './_components/Navbar';

/**
 * html tag 로 seo 보완
 */
export default async function Main(): Promise<React.ReactElement> {
  const posts = await getAllPostFrontMatter();
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Navbar />
      <Intro />
      <PostList posts={posts} />
    </div>
  );
}
