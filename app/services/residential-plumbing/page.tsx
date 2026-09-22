import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Expert Residential Plumbing Services in Denver, CO',
  description: 'Your trusted Denver plumber for all home plumbing needs, including faucet repair, toilet installation, sump pumps, and water heater services. Quality workmanship guaranteed.',
  keywords: ['residential plumber Denver', 'home plumbing repair', 'faucet installation', 'sump pump services', 'water heater repair Denver'],
  openGraph: {
    title: 'Expert Residential Plumbing Services in Denver, CO',
    description: 'Your trusted Denver plumber for all home plumbing needs, including faucet repair, toilet installation, sump pumps, and water heater services. Quality workmanship guaranteed.',
    url: 'https://www.peachtreeplumbing5280.com/services/residential-plumbing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Residential Plumbing Services in Denver, CO',
    description: 'Your trusted Denver plumber for all home plumbing needs, including faucet repair, toilet installation, sump pumps, and water heater services. Quality workmanship guaranteed.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/residential-plumbing',
  },
};

const faqItems = [
  {
    question: "Can you fix my leaky faucet?",
    answer: "Yes, we can repair all types of leaky faucets, from simple drips to more complex issues. A leaky faucet not only wastes water but can also indicate other plumbing problems, so it’s best to have it professionally inspected.",
  },
  {
    question: "Why is my sump pump not working?",
    answer: "Sump pump failures can be caused by power outages, clogged switches, or a burnt-out motor. We can diagnose the problem and recommend a repair or replacement to protect your basement from flooding.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/residential-plumbing',
      'url': 'https://www.peachtreeplumbing5280.com/services/residential-plumbing',
      'name': 'Expert Residential Plumbing Services in Denver, CO',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'Your trusted Denver plumber for all home plumbing needs, including faucet repair, toilet installation, sump pumps, and water heater services. Quality workmanship guaranteed.'
    },
    {
      '@type': 'Service',
      'serviceType': 'Residential Plumbing',
      'provider': {
        '@type': 'Plumber',
        'name': 'Peach Tree Plumbing'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': 'Complete plumbing services for homeowners, from fixing leaks to installing new fixtures and water heaters.'
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

const ResidentialPlumbingPage = () => {
  return (
    <div className="container mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">Full-Service Residential Plumbing</h1>
            <div className="post-meta text-center mb-5">
              <span>Your Trusted Home Plumbing Partner</span>
            </div>
            <div className={styles.markdownContent}>
              <p>From the kitchen to the bathroom to the basement, your home’s plumbing system is crucial for your family’s comfort and daily routine. At Peach Tree Plumbing, we are dedicated to providing reliable, high-quality residential plumbing services to homeowners throughout the Denver area. Our experienced plumbers treat your home with respect and work efficiently to resolve your plumbing issues.</p>
              <h2 className="fw-bold mt-5 mb-3">Our Home Plumbing Services</h2>
              <ul>
                <li><strong>Fixture Repair and Installation:</strong> We can repair or replace faucets, sinks, toilets, and garbage disposals.</li>
                <li><strong>Sump Pump Services:</strong> We install and maintain sump pumps to keep your basement dry and protected from water damage.</li>
                <li><strong>Water Heater Services:</strong> We offer repair, replacement, and maintenance for both traditional and tankless water heaters.</li>
                <li><strong>Drain Cleaning:</strong> We can clear stubborn clogs in your sinks, showers, and main sewer line.</li>
              </ul>
              <p>No matter the size of the job, we are committed to providing honest, professional service and lasting solutions for your home.</p>
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

export default ResidentialPlumbingPage;
