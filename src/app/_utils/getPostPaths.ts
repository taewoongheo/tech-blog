import { glob } from 'glob';
import path from 'path';

const BASE_PATH = process.cwd();

/**
 * 모든 Post 들의 절대경로 반환
 */
export default async function getPostPaths(): Promise<string[]> {
  const postPath = path.join(BASE_PATH, 'src', 'app', '_posts', '**/*.mdx');
  try {
    return glob(postPath);
  } catch (err) {
    throw err;
  }
}
