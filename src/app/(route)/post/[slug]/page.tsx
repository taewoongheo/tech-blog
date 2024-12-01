import getPostPaths from '@/app/_utils/getPostPaths';
import path from 'path';

type Props = {
  params: { slug: string };
};

/**
 * 빌드타임에 동적 페이지 랜더링. 생성할 페이지의 slug 들을 반환
 */
export async function generateStaticParams() {
  const paths = await getPostPaths();
  return paths.map((filePath) => ({
    params: { slug: path.basename(filePath, '.mdx') },
  }));
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  return <h1>{slug}</h1>;
}
