import { glob } from 'glob';
import path from 'path';

const BASE_PATH = process.cwd();

/**
 * 조건에 맞는 모든 파일들의 경로 반환
 */
export default async function getPostPaths(): Promise<string[]> {
  const postPath = path.join(BASE_PATH, 'src', 'app', '_posts', '**/*.mdx');
  try {
    return glob(postPath);
  } catch (err) {
    throw err;
  }
}
