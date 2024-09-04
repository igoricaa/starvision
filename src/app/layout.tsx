import { Josefin_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Banner from '@/components/header/Banner';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
  weight: ['300', '400'],
});

const albra = localFont({
  src: [
    {
      path: '../../fonts/AlbraBookTRIAL-Regular.woff2',
      weight: '400',
    },
  ],
  variable: '--font-albra',
});

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
      <body className={`${josefin.variable} ${albra.variable}`}>
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
