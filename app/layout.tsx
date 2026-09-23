import React from 'react';
import './globals.css';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { Lilita_One, Roboto_Flex } from 'next/font/google';
import ConditionalContainer from './components/ConditionalContainer';

const lilitaOne = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lilita-one',
});

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${robotoFlex.variable} ${lilitaOne.variable}`}>
        <NavigationBar />
        <main>
          <ConditionalContainer>{children}</ConditionalContainer>
        </main>
        <Footer />
      </body>
    </html>
  );
}
