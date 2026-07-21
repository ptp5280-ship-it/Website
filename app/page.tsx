
import React from 'react';
import HeroBanner from './components/HeroBanner';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import MissionStatement from './components/MissionStatement';
import ArticleCarousel from './components/ArticleCarousel';
import FAQ from './components/FAQ';
import { defaultFaqs } from './lib/faqData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peach Tree Plumbing | Your Trusted Denver Plumber',
  description:
    'Your reliable Denver plumber for over 15 years. We offer transparent pricing on all plumbing services, from drain cleaning to water heater installation. Call for a free estimate!',
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com',
  },
  openGraph: {
    title: 'Peach Tree Plumbing | Your Trusted Denver Plumber',
    description: 'Top-rated, reliable plumbing services in Denver, CO.',
    url: 'https://www.peachtreeplumbing5280.com',
    images: [
      {
        url: 'https://www.peachtreeplumbing5280.com/PTP-LOGO.jpg',
        width: 800,
        height: 600,
        alt: 'Peach Tree Plumbing Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peach Tree Plumbing | Your Trusted Denver Plumber',
    description: 'Your reliable Denver plumber for over 15 years. We offer transparent pricing on all plumbing services, from drain cleaning to water heater installation. Call for a free estimate!',
    images: ['https://www.peachtreeplumbing5280.com/PTP-LOGO.jpg'],
  },
};

const HomePage = () => {
  const schemaGraph: Record<string, unknown>[] = [];

  schemaGraph.push({
    '@type': 'WebSite',
    '@id': 'https://www.peachtreeplumbing5280.com/#website',
    url: 'https://www.peachtreeplumbing5280.com',
    name: 'Peach Tree Plumbing',
    publisher: {
      '@id': 'https://www.peachtreeplumbing5280.com/#plumber',
    },
  });

  schemaGraph.push({
    '@type': 'FAQPage',
    mainEntity: defaultFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  });

  schemaGraph.push({
    '@type': 'Plumber',
    '@id': 'https://www.peachtreeplumbing5280.com/#plumber',
    name: 'Peach Tree Plumbing',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4210 S Galapago St',
      addressLocality: 'Englewood',
      addressRegion: 'CO',
      postalCode: '80110',
      addressCountry: 'US',
    },
    telephone: '+1-720-298-1900',
    url: 'https://www.peachtreeplumbing5280.com',
    image: 'https://www.peachtreeplumbing5280.com/PTP-LOGO.jpg',
    openingHours: 'Mo-Fr 08:00-17:00',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '39.7392',
        longitude: '-104.9903',
      },
      geoRadius: '50000',
    },
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroBanner />
      <Services />
      <Testimonials />
      <MissionStatement />
      <ArticleCarousel />
      <FAQ faqs={defaultFaqs} />
    </div>
  );
};

export default HomePage;
