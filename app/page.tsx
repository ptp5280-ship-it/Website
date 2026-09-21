import React from 'react';
import HeroBanner from './components/HeroBanner';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import MissionStatement from './components/MissionStatement';
import ArticleCarousel from './components/ArticleCarousel.client';
import FAQ from './components/FAQ';
import { defaultFaqs } from './lib/faqData';
import { peachTreePlumbingSchema } from './lib/schema';
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
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peachTreePlumbingSchema) }}
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
