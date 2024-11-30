import { glob } from 'glob';
import path from 'path';

const BASE_PATH = process.cwd();

/**
 * 모든 Post 의 absolute path 반환. generateStaticParams() 를 위해 비동기 호출
 */
export const getAllPostPath = async (): Promise<string[]> => {
  const postPath = path.join(BASE_PATH, 'src', 'app', '_posts', '**/*.mdx');
  try {
    const paths = await glob(postPath);
    return paths;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

/**
 * 모든 Post 의 slug 반환.
 */
export const getAllPostSlugs = async (): Promise<string[]> => {
  try {
    const slugs = await getAllPostPath();
    return slugs.map((el) => path.basename(el, '.mdx'));
  } catch (err) {
    console.error(err);
    throw err;
  }
};
