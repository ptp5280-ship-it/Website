import type { Metadata, Viewport } from 'next';
import { Lilita_One, Lato } from 'next/font/google';
import './globals.css';
import './styles/markdown.css';
import NavigationBar from '@/app/components/NavigationBar';
import Footer from '@/app/components/Footer';
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
} from '@/app/lib/config';

const lilitaOne = Lilita_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lilita-one',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    images: '/PTP-LOGO.jpg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`layout-body ${lilitaOne.variable} ${lato.variable}`}
      >
        <NavigationBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
