import { MetadataRoute } from 'next';
import { Post } from './_types/Post';
import getAllPostFrontMatter from './_utils/get-post';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostFrontMatter();

  const mainPage: MetadataRoute.Sitemap[number] = {
    url: 'https://taewoongheo.github.io/tech-blog/',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 1.0,
  };

  const postPages: MetadataRoute.Sitemap = posts.map((post: Post) => {
    const [year, month, day] = post.date.split('.');
    const date = new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10),
    );
    return {
      url: `https://taewoongheo.github.io/tech-blog/post/${post.slug}`,
      lastModified: date.toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  return [mainPage, ...postPages];
}
