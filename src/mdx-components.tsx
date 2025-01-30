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
      <h2 className="text-2xl font-main font-semibold mt-10 mb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-main font-semibold mt-8 mb-1">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-main font-semibold mt-6 mb-1">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-base font-main leading-7 mb-4 text-gray-700">
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-blue-600 underline hover:no-underline"
        target={href?.startsWith('#') ? '_self' : '_blank'}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-8 my-5 text-gray-700">{children}</ul>
    ),
    li: ({ children }) => <li className="mb-3 leading-7">{children}</li>,
    // rehype-pretty-code 가 생성하는 class 를 덮어씌움
    pre: ({ children }) => (
      <pre tabIndex={-1} className="mb-3">
        {children}
      </pre>
    ),
    strong: ({ children }) => <i className="font-semibold">{children}</i>,
    blockquote: ({ children }) => (
      <blockquote
        className="
        my-6
        pl-6
        border-l-4
        border-gray-200
        text-gray-600
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
