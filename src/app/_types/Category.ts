export const categories = [
  'Story',
  'JavaScript',
  'React',
  'TypeScript',
  'NextJS',
  'ReactNative',
] as const;

export type Categories = (typeof categories)[number];
