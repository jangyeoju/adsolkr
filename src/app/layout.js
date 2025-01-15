// 'use client';

import './globals.css';

import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../style/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const montserrat = localFont({
  src: '../style/fonts/Montserrat-Bold.ttf',
  display: 'swap',
  weight: '700',
  variable: '--font-montserrat',
});

export const metadata = {
  title: '어드밴스솔루션',
  description: '어드밴스솔루션 공식 홈페이지',
  openGraph: {
    title: '어드밴스솔루션',
    description: '어드밴스솔루션 공식 홈페이지',
    images: ['/img/adsol.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html
        lang="en"
        className={`${pretendard.className} ${montserrat.className}`}
      >
        <head>
        <meta name="naver-site-verification" content="34b3af1889921e21080edccc5654bfbfe3a5b6e8" />
        </head>
        <body>
          {children}
        </body>
      </html>
    </>
  );
}


