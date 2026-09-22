import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Commercial Plumbing Services for Denver Businesses',
  description: 'Reliable commercial plumbing services in Denver, CO. We handle tenant improvements, commercial water heaters, drain cleaning, and backflow prevention for businesses.',
  keywords: ['commercial plumbing Denver', 'business plumbing', 'commercial water heater', 'tenant improvement plumbing', 'backflow testing'],
  openGraph: {
    title: 'Commercial Plumbing Services for Denver Businesses',
    description: 'Reliable commercial plumbing services in Denver, CO. We handle tenant improvements, commercial water heaters, drain cleaning, and backflow prevention for businesses.',
    url: 'https://www.peachtreeplumbing5280.com/services/commercial-plumbing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Plumbing Services for Denver Businesses',
    description: 'Reliable commercial plumbing services in Denver, CO. We handle tenant improvements, commercial water heaters, drain cleaning, and backflow prevention for businesses.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/commercial-plumbing',
  },
};

const faqItems = [
  {
    question: "What types of businesses do you serve?",
    answer: "We provide plumbing services for a wide range of commercial clients, including restaurants, office buildings, retail stores, and multi-family housing units. We understand the unique demands of commercial plumbing systems.",
  },
  {
    question: "What is backflow testing and why is it important?",
    answer: "Backflow prevention devices stop contaminated water from entering the public water supply. Most municipalities require annual testing of these devices by a certified plumber to ensure they are functioning correctly and to maintain public health.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/commercial-plumbing',
      'url': 'https://www.peachtreeplumbing5280.com/services/commercial-plumbing',
      'name': 'Commercial Plumbing Services for Denver Businesses',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'Reliable commercial plumbing services in Denver, CO. We handle tenant improvements, commercial water heaters, drain cleaning, and backflow prevention for businesses.'
    },
    {
      '@type': 'Service',
      'serviceType': 'Commercial Plumbing',
      'provider': {
        '@type': 'Plumber',
        'name': 'Peach Tree Plumbing'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': 'Professional plumbing services for businesses, including installation, maintenance, and emergency repairs.'
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqItems.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer,
        },
      })),
    },
    {
      '@type': 'Plumber',
      '@id': 'https://www.peachtreeplumbing5280.com/#plumber',
      'name': 'Peach Tree Plumbing',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '4210 S Galapago St',
        'addressLocality': 'Englewood',
        'addressRegion': 'CO',
        'postalCode': '80110',
        'addressCountry': 'US',
      },
      'telephone': '+1-720-298-1900',
      'url': 'https://www.peachtreeplumbing5280.com',
    }
  ]
};

const CommercialPlumbingPage = () => {
  return (
    <div className="container mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">Commercial Plumbing Solutions</h1>
            <div className="post-meta text-center mb-5">
              <span>Keeping Your Business Running Smoothly</span>
            </div>
            <div className={styles.markdownContent}>
              <p>Plumbing issues can bring a business to a halt. At Peach Tree Plumbing, we provide reliable and timely commercial plumbing services to minimize downtime and keep your operations running smoothly. We understand that commercial plumbing systems are more complex and subject to more demanding use than residential systems, and we have the expertise to handle the unique challenges they present.</p>
              <h2 className="fw-bold mt-5 mb-3">Our Commercial Services Include</h2>
              <ul>
                <li><strong>Tenant Improvements:</strong> We work with building owners and managers on plumbing for new tenant build-outs and commercial space renovations.</li>
                <li><strong>Commercial Water Heaters:</strong> We service and install high-demand water heaters suitable for restaurants, hotels, and other commercial uses.</li>
                <li><strong>Drain and Sewer Line Services:</strong> We offer powerful hydro-jetting and drain cleaning services to clear blockages in high-traffic commercial drains.</li>
                <li><strong>Backflow Prevention:</strong> We are certified to install, test, and repair backflow prevention devices to keep your business in compliance with local health regulations.</li>
              </ul>
              <p>We are committed to providing professional, high-quality service that your business can depend on. Contact us to learn more about our commercial plumbing solutions.</p>
            </div>

            {faqItems.length > 0 && (
              <div className="mt-5">
                <h2 className="fw-bold mb-4 text-center">
                  Frequently Asked Questions
                </h2>
                <FAQ faqs={faqItems} />
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

export default CommercialPlumbingPage;
