import React from 'react';
import PostList from './_components/PostList';
import Intro from './_components/Intro';
import Navbar from './_components/Navbar';
import getAllPostFrontMatter from './_utils/get-post';

export default async function Main(): Promise<React.ReactElement> {
  const posts = await getAllPostFrontMatter();
  return (
    <div className="w-full flex flex-col items-center mb-[5rem]">
      <Navbar />
      <Intro />
      <PostList posts={posts} />
    </div>
  );
}
