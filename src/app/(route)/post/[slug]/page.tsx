import getPostPaths from '@/app/_utils/getPostPaths';
import path from 'path';
import fs from 'fs';
import { promises as pfs } from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

type Props = {
  params: { slug: string };
};

/**
 * build 시점에 실행할 slug 반환
 */
export async function generateStaticParams() {
  const paths = await getPostPaths();
  return paths.map((filePath) => ({
    params: { slug: path.basename(filePath, '.mdx') },
  }));
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const pathStr = path.join(
    process.cwd(),
    'src',
    'app',
    '_posts',
    `**/${slug}.mdx`,
  );
  const postPath = (await glob(pathStr))[0];
  if (!fs.existsSync(postPath)) {
    return <h1>Post not found</h1>;
  }
  const data = await pfs.readFile(postPath, 'utf-8');
  const content = matter(data).content;
  const mdxSource = content;

  const code = String(
    await compile(mdxSource, { outputFormat: 'function-body' }),
  );

  const { default: MDXContent } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return <MDXContent />;
}
