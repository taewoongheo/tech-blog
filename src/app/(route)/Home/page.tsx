import PostList from './_components/PostList';
import getPosts from './_utils/getPosts';

export default async function Home(): Promise<React.ReactNode> {
  const posts = await getPosts();
  return <PostList posts={posts} />;
}
