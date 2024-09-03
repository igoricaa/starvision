import { Josefin_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
  weight: ['400'],
});

// const gilroy = localFont({
//   src: [
//     {
//       path: '../../fonts/Gilroy-Light.woff2',
//       weight: '300',
//     },
//     {
//       path: '../../fonts/Gilroy-Regular.woff2',
//       weight: '400',
//     },
//     {
//       path: '../../fonts/Gilroy-Medium.woff2',
//       weight: '500',
//     },
//     {
//       path: '../../fonts/Gilroy-Semibold.woff2',
//       weight: '600',
//     },
//     {
//       path: '../../fonts/Gilroy-Bold.woff2',
//       weight: '700',
//     },
//   ],
//   variable: '--font-gilroy',
// });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${josefin.variable}`}>{children}</body>
    </html>
  );
}
