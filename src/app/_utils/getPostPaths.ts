import { glob } from 'glob';
import path from 'path';

const BASE_PATH = process.cwd();

/**
 * 모든 Post 들의 absolute path 반환
 */
export async function getAllPostPaths(): Promise<string[]> {
  const postPath = path.join(BASE_PATH, 'src', 'app', '_posts', '**/*.mdx');
  try {
    return glob(postPath);
  } catch (err) {
    throw err;
  }
}

/**
 * slug 에 해당하는 Post 의 absolute path 반환
 */
export async function getPostPath(slug: string): Promise<string> {
  const pathStr = path.join(
    BASE_PATH,
    'src',
    'app',
    '_posts',
    `**/${slug}.mdx`,
  );
  try {
    return (await glob(pathStr))[0];
  } catch (err) {
    console.error(err);
    throw err;
  }
}
