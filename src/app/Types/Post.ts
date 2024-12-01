import { Categories } from './Category';

export type Post = {
  slug: string;
  title: string;
  tags: Categories[];
  date: string;
  description: string;
};
