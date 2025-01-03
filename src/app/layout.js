'use client';

import './globals.css';

import localFont from 'next/font/local';
import Script from 'next/script';

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

export default function RootLayout({ children }) {
  return (
    <>
      <html
        lang="en"
        className={`${pretendard.className} ${montserrat.className}`}
      >
        <head>
          <meta name="naver-site-verification" content="bc5dde5edbbb6eb963169a2a2b3cd633f3e383c6" />
        </head>
        <body>
          <Script>
          </Script>
          {children}
        </body>
      </html>
    </>
  );
}
