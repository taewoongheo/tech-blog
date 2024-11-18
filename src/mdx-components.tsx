import type { MDXComponents } from 'mdx/types'

/** can you custom style
 * https://nextjs.org/docs/app/building-your-application/configuring/mdx#using-custom-styles-and-components
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
