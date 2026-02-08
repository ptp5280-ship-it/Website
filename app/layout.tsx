import type { Metadata } from "next";
import { Lilita_One, Lato } from "next/font/google";
import "./globals.css";
import "./styles/markdown.css";
import NavigationBar from "@/app/components/NavigationBar";
import Footer from "@/app/components/Footer";
import Script from 'next/script';

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita-one",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://peachtreeplumbing5280.com'),
  title: "Peach Tree Plumbing",
  description: "Your trusted local plumber in Denver, Colorado.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Peach Tree Plumbing',
    'image': 'https://peachtreeplumbing5280.com/PTP-LOGO.jpg',
    '@id': 'https://peachtreeplumbing5280.com',
    'url': 'https://peachtreeplumbing5280.com',
    'telephone': '(720) 298-1900',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'sameAs': [
      'https://www.instagram.com/peachtreeplumbing/'
    ] 
  };
  
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`d-flex flex-column min-vh-100 ${lilitaOne.variable} ${lato.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavigationBar />
        <main className="flex-shrink-0">{children}</main>
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  );
}