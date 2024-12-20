import path from 'path';
import { promises as pfs } from 'fs';
import matter from 'gray-matter';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { Metadata } from 'next';
import { getAllPostPaths, getPostPath } from '@/app/_utils/getPostPaths';
import { useMDXComponents } from '@/mdx-components';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import Giscus from './giscus';

type Props = {
  params: { slug: string };
};

const options: Options = {
  theme: 'github-light',
  keepBackground: false,
  bypassInlineCode: false,
  defaultLang: {
    block: 'plaintext',
    inline: 'plaintext',
  },
};

/**
 * build 시점에 실행할 slug 반환
 */
export async function generateStaticParams(): Promise<Props[]> {
  const paths = await getAllPostPaths();
  return paths.map((filePath) => ({
    params: { slug: path.basename(filePath, '.mdx') },
  }));
}

/**
 * build 시점에 메타데이터 생성
 *
 * TODO: metadataBase 설정: OG, Canonical URL
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const postPath = await getPostPath(slug);

  if (!pfs.access(postPath)) {
    return {
      title: 'post not found',
      description: 'post not fonud',
      referrer: 'origin-when-cross-origin',
      generator: 'Next.js',
      applicationName: 'TaewoongHeo Tech Blog',
      keywords: [],
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
    };
  }

  const data = await pfs.readFile(postPath, 'utf-8');
  const metadata = matter(data).data;

  return {
    generator: 'Next.js',
    applicationName: 'TaewoongHeo Tech Blog',
    referrer: 'origin-when-cross-origin',
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.tags,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

/**
 * TODO: slug 가 겹치지 않도록 보장해야함.
 */
export default async function Post({
  params,
}: Props): Promise<React.ReactNode> {
  const components = useMDXComponents({});
  const { slug } = await params;
  const postPath = await getPostPath(slug);

  if (!pfs.access(postPath)) {
    return <h1>not found</h1>;
  }

  const data = await pfs.readFile(postPath, 'utf-8');
  const mdxSource = matter(data);
  const mdxMeta = mdxSource.data;
  const title = mdxMeta.title;
  // const thumnail = mdxMeta.thumnail;
  const mdxContent = mdxSource.content;

  const code = String(
    await compile(mdxContent, {
      outputFormat: 'function-body',
      rehypePlugins: [[rehypePrettyCode, options]],
    }),
  );

  const { default: MDXContent } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return (
    <>
      <div className="mb-5">
        <h1 className="text-5xl font-semibold">{title}</h1>
      </div>
      <MDXContent components={components} />
      <Giscus />
    </>
  );
}
