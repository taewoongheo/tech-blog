import React from 'react';
import PostList from './_components/PostList';
import Intro from './_components/Intro';
import Navbar from './_components/Navbar';
import getAllPostFrontMatter from './_utils/get-post';

export default async function Main(): Promise<React.ReactElement> {
  const posts = await getAllPostFrontMatter();
  return (
    <div className="w-full max-w-screen overflow-x-hidden flex flex-col items-center">
      <Navbar />
      <Intro />
      <PostList posts={posts} />
    </div>
  );
}
