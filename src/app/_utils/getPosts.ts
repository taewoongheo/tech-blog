import matter from 'gray-matter';
import { promises as fs } from 'fs';
import { Post } from '../Types/Post';
import getPostPaths from './getPostPaths';

/**
 * TODO: 날짜별 정렬
 * post 의 frontmatter 를 파싱하여 Post[] 반환
 */
export default async function getPosts(): Promise<Post[]> {
  try {
    const paths = await getPostPaths();
    const posts: Post[] = await Promise.all(
      paths.map(async (path) => {
        const data = await fs.readFile(path, 'utf-8');
        const frontmatter = matter(data).data;
        return {
          slug: frontmatter.slug,
          title: frontmatter.title,
          tags: frontmatter.tags,
          date: frontmatter.date,
          description: frontmatter.description,
        };
      }),
    );
    return posts;
  } catch (err) {
    throw err;
  }
}
