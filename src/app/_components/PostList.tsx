import Link from 'next/link';
import { Post } from '../Types/Post';
import PostItem from './PostItem';

export default function PostList({
  posts,
}: {
  posts: Post[];
}): React.ReactNode {
  return (
    <div className="flex mt-all sm:mt-sm px-all sm:px-sm md:px-md lg:px-lg xl:px-xl">
      <div className="flex-[1_0_0%]">
        {posts.map((post) => {
          return (
            <Link
              key={post.slug.toString()}
              href={`post/${post.slug}`}
              className="group"
            >
              <PostItem post={post} />
            </Link>
          );
        })}
      </div>
      {/* <div className="hidden md:flex-[0.4_0_0%] md:block">tags</div> */}
    </div>
  );
}
