import React from 'react';
import './globals.css';
import localFont from 'next/font/local';

const mainFont = localFont({
  src: '../fonts/PretendardVariable.woff2',
  variable: '--font-main',
  fallback: ['sans-serif'],
  weight: '45 920',
});

export const metadata = {
  title: {
    template: '%s | 허태웅 기술 블로그',
    default: '허태웅 기술 블로그',
  },
  authors: [{ name: '허태웅', url: 'https://github.com/taewoongheo' }],
  category: 'Technology',
  description:
    '프론트엔드 개발자의 기술 블로그입니다. React, JavaScript, Next.js를 중심으로 문제 해결 과정에서의 깊은 고민과 기술적 통찰을 쉽게 설명하며, 단순한 기술 나열이 아닌 문제 정의부터 해결까지의 전체적인 과정과 근거를 담은 개발 이야기를 전합니다.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '허태웅 기술 블로그',
    description: '배우고 고민한 흔적들을 공유하는 블로그입니다.',
    url: 'https://taewoongheo.github.io/tech-blog/',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://i.imgur.com/PTFCYiY.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'article',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  creator: '허태웅',
  publisher: '허태웅',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en" className={mainFont.variable}>
      <body>{children}</body>
    </html>
  );
}
