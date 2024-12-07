"use client"
import "./globals.css";
import localFont from 'next/font/local'

const pretendard = localFont({
  src: '../app/style/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})


export default function RootLayout({children}) {
  return (
    <html lang="en" className={`${pretendard.variable} font-pretendard`}>
      <body>
        {children}
      </body>
    </html>
  );
}

