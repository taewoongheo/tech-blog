import React from 'react';
import PostList from './_components/PostList';
import getPosts from './_utils/getPosts';

export default async function Main(): Promise<React.ReactElement> {
  const posts = await getPosts();
  return <PostList posts={posts} />;
}
