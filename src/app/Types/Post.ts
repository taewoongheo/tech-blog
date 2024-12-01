import { Categories } from './Category';

export type Post = {
  year: string;
  month: string;
  date: string;
  slug: string;
  title: string;
  tags: Categories[];
  description: string;
};
