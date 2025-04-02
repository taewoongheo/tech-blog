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
    '프로젝트를 진행하면서 배우고 고민한 것들을 대해 기록하는 블로그입니다. 문제해결을 중심으로 기록해요. 몰입을 중요하게 생각합니다.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '허태웅 기술 블로그',
    description:
      '프로젝트를 진행하면서 배우고 고민한 것들을 대해 기록합니다. 기술에 종속되지 않고 문제해결을 중심으로 기록해요.',
    url: 'https://taewoongheo.github.io/tech-blog/',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://github.com/user-attachments/assets/676cc999-5942-4441-b227-6af2b6f3fd91',
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
  verification: {
    google: 'fpHIZwUl25zQL72Z8DsFHC2G97GmToki09OquVoMkyE',
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
      <body className="px-8 sm:px-8">{children}</body>
    </html>
  );
}
