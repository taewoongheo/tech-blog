import React from 'react';
import path from 'path';
import { promises as pfs } from 'fs';
import matter from 'gray-matter';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { Metadata } from 'next';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import { getAllPostPaths, getPostPath } from '@/app/_utils/get-post-path';
import Giscus from './giscus';
import useMDXComponents from '@/mdx-components';
import Overview from './Overview';
import { Post as PostType } from '@/app/_types/Post';

type params = { slug: string };

const options: Options = {
  theme: 'github-light',
  keepBackground: false,
  bypassInlineCode: false,
  defaultLang: {
    block: 'plaintext',
    inline: 'plaintext',
  },
};

export async function generateStaticParams(): Promise<params[]> {
  const paths = await getAllPostPaths();
  const slugs = await Promise.all(
    paths.map(async (filePath) => ({
      slug: path.basename(filePath, '.mdx'),
    })),
  );
  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const postPath = await getPostPath(slug);
  if (typeof postPath === 'string' && !pfs.access(postPath)) {
    throw new Error("can't find path");
  }

  const data = await pfs.readFile(postPath, 'utf-8');
  const metadata = matter(data).data;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.tags,

    alternates: {
      canonical: `/posts/${slug}`,
    },

    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://taewoongheo.github.io/tech-blog/posts/${slug}`,
      images: [
        {
          url: metadata.thumbnail || 'https://i.imgur.com/PTFCYiY.jpeg',
          width: 1200,
          height: 630,
        },
      ],
      publishedTime: metadata.date,
      modifiedTime: metadata.updateDate,
      tags: metadata.tags,
    },
  };
}

/**
 * TODO: slug 가 겹치지 않도록 보장해야함.
 */
export default async function Post({
  params,
}: {
  params: Promise<params>;
}): Promise<React.ReactNode> {
  const components = useMDXComponents({});
  const { slug } = await params;
  const postPath = await getPostPath(slug);

  if (!pfs.access(postPath)) {
    return <h1>not found</h1>;
  }

  const data = await pfs.readFile(postPath, 'utf-8');
  const mdxSource = matter(data);
  const mdxMetadata = mdxSource.data as PostType;
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
      <Overview mdxMetadata={mdxMetadata} />

      {/* Content */}
      <MDXContent components={components} />

      {/* Comments */}
      <div className="my-16">
        <Giscus />
      </div>
    </>
  );
}
