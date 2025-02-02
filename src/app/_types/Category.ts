export const categories = [
  'Story',
  'JavaScript',
  'React',
  'TypeScript',
  'NextJS',
] as const;

export type Categories = (typeof categories)[number];
