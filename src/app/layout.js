'use client';

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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${pretendard.className} ${montserrat.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
