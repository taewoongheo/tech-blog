import React from 'react';
import PostList from './_components/PostList';
import { getAllPostFrontMatter } from './_utils/getPosts';

export default async function Main(): Promise<React.ReactElement> {
  const posts = await getAllPostFrontMatter();
  return <PostList posts={posts} />;
}
