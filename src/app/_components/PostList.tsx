import Link from 'next/link';
import { Post } from '../Types/Post';

export default function PostList({
  posts,
}: {
  posts: Post[];
}): React.ReactNode {
  return (
    <ul>
      {posts.map(({ year, month, date, slug, title, tags, description }) => {
        return (
          <li key={title}>
            <h1>
              <Link href={`../../../${year}/${month}/${slug}.mdx`}>
                {title}
              </Link>
            </h1>
            {tags.map((tag, i) => `${i ? ', ' : ''}${tag}`)}
            <p>{date}</p>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
}
