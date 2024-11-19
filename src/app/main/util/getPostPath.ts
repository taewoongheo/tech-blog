import { glob } from 'glob';
import path from 'path';

const BASE_PATH = process.cwd();

/**
 * 모든 글들의 파일경로를 반환
 * TODO: 태그 별 글 파일 경로 반환 기능
 * @returns {Promise<string[]>}
 */
export const getAllPostPath = (): Promise<string[]> => {
  const postPath = path.join(BASE_PATH, 'src', 'app', 'posts', '**/*.mdx');
  try {
    const paths = glob(postPath);
    return paths;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
