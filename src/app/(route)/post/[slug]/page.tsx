import React from 'react';
import path from 'path';
import { promises as pfs } from 'fs';
import matter from 'gray-matter';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { Metadata } from 'next';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import Image from 'next/image';
import { getAllPostPaths, getPostPath } from '@/app/_utils/get-post-path';
import Giscus from './giscus';
import useMDXComponents from '@/mdx-components';
import Tag from '@/app/_components/Tag';
import { Categories } from '@/app/Types/Category';

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

/**
 * build 시점에 실행할 slug 반환
 */
export async function generateStaticParams(): Promise<params[]> {
  const paths = await getAllPostPaths();
  const slugs = await Promise.all(
    paths.map(async (filePath) => ({
      slug: path.basename(filePath, '.mdx'),
    })),
  );
  return slugs;
}

/**
 * build 시점에 메타데이터 생성
 *
 * TODO: metadataBase 설정: OG, Canonical URL
 */
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
  const mdxMeta = mdxSource.data;
  const { title, thumbnail, description, tags, date } = mdxMeta;
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
      <div className="flex flex-col items-center justify-center my-8 lg:my-12">
        <div className="flex flex-col w-full items-start space-y-6">
          {/* Tags */}
          <div className="space-y-1">
            {tags.map((tag: Categories) => (
              <Tag key={tag.toString()} tag={tag} />
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-[600] leading-[2.8rem] lg:leading-[4rem]">
            {title}
          </h1>

          {/* Description and Date */}
          <div className="space-y-2">
            <p className="font-[var(--mainfont)] text-[#969696]">
              {description}
            </p>
            <p className="font-[var(--mainfont)] text-[#969696]">{date}</p>
          </div>
        </div>

        {/* Thumbnail Image */}
        <div className="relative w-full max-w-[700px] aspect-[600/380] my-12 lg:my-16">
          <Image
            src={thumbnail}
            alt=""
            fill
            style={{ objectFit: 'cover', borderRadius: '8px' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="mb-16">
        <MDXContent components={components} />
      </div>

      {/* Comments */}
      <div className="mt-16">
        <Giscus />
      </div>
    </>
  );
}
