import { getAllPostSlugs } from '@/app/getSlugs';

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    console.log(slugs);
    return slugs.map((sl) => ({
      slug: sl,
    }));
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  return <h1>{slug}</h1>;
}
