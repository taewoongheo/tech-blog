import { Post } from '../Types/Post';
import PostItem from './PostItem';

export default function PostList({
  posts,
}: {
  posts: Post[];
}): React.ReactNode {
  return (
    <div>
      {posts.map((post) => {
        return <PostItem key={post.slug.toString()} post={post} />;
      })}
    </div>
  );
}
