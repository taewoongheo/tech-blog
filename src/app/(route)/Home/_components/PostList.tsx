import { Post } from '../Types/PostType';

export default function PostList({
  posts,
}: {
  posts: Post[];
}): React.ReactNode {
  return (
    <ul>
      {posts.map((el) => {
        return (
          <li key={el.title}>
            <h2>{el.title}</h2>
            <p>{el.description}</p>
            <p>published: {el.date}</p>
          </li>
        );
      })}
    </ul>
  );
}
