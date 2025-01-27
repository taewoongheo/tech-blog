import matter from 'gray-matter';
import { promises as fs } from 'fs';
import { Post } from '../Types/Post';
import { getAllPostPaths } from './get-post-path';
import compareDate from './compare-date';

/**
 * post 의 frontmatter 를 파싱하여 Post[] 반환
 */
export default async function getAllPostFrontMatter(): Promise<Post[]> {
  try {
    const paths = await getAllPostPaths();
    const posts: Post[] = await Promise.all(
      paths.map(async (path) => {
        const data = await fs.readFile(path, 'utf-8');
        const frontmatter = matter(data).data;
        if (!frontmatter.date.match(/^\d{4}-\d{2}-\d{2}$/)) {
          throw new Error('Invalid date format in frontmatter');
        }
        return {
          slug: frontmatter.slug,
          title: frontmatter.title,
          tags: frontmatter.tags,
          date: frontmatter.date,
          description: frontmatter.description,
          thumbnail: frontmatter.thumbnail,
        };
      }),
    );
    posts.sort(compareDate);
    return posts;
  } catch {
    throw new Error("can't parsing frontmatter");
  }
}
