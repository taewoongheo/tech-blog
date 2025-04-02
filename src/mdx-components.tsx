import React from 'react';
import type { MDXComponents } from 'mdx/types';

/**
 * TODO: 이미지
 */
export default function useMDXComponents(
  components: MDXComponents,
): MDXComponents {
  return {
    // h1: ({ children }) => (
    //   <p className="text-lg font-semibold mb-3">{children}</p>
    // ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-main font-semibold mt-6 md:mt-12 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-main font-semibold mt-5 md:mt-10 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-main font-semibold mt-4 md:mt-8 mb-3">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-[17px] font-main leading-9 mb-6 text-gray-700">
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-main text-blue-600 underline hover:no-underline"
        target={href?.startsWith('#') ? '_self' : '_blank'}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="font-main list-disc pl-8 my-5 text-gray-700">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="font-main mb-3 leading-7">{children}</li>
    ),
    // rehype-pretty-code 가 생성하는 class 를 덮어씌움
    pre: ({ children }) => (
      <pre tabIndex={-1} className="mb-3">
        {children}
      </pre>
    ),
    strong: ({ children }) => (
      <i className="font-main font-semibold">{children}</i>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="
        mb-6
        pl-6
        border-l-4
        border-gray-200
        text-gray-500
        font-main
        text-lg
        italic
        [&>p]:leading-relaxed
        [&>p]:py-1
        [&>p]:m-0
        [&>p]:!text-inherit
        [&>p]:!font-inherit
      "
      >
        {children}
      </blockquote>
    ),
    ...components,
  };
}
