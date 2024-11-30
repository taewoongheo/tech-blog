import { Categories } from './Category';

export type Post = {
  title: string;
  tags: Categories[];
  date: string;
  description: string;
};
