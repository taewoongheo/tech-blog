import type { MDXComponents } from 'mdx/types';

/**
 * TODO: 반응형, `, code block, link, 이미지
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold mb-3">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-4 mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-4 mb-1">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mt-4 mb-1">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-base leading-7 mb-4 text-gray-700">{children}</p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-blue-600 underline hover:no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-8 my-5 text-gray-700">{children}</ul>
    ),
    li: ({ children }) => <li className="mb-3 leading-7">{children}</li>,
    //rehype-pretty-code 가 생성하는 class 를 덮어씌움
    pre: ({ children }) => (
      <pre tabIndex={-1} className="mb-3">
        {children}
      </pre>
    ),
    ...components,
  };
}
