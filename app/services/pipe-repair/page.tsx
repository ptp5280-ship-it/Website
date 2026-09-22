import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Pipe Repair & Repiping Services in Denver, CO',
  description: 'From minor leak repairs to full home repiping, our Denver plumbers handle all types of pipe materials and issues. We offer durable, long-lasting solutions.',
  keywords: ['pipe repair Denver', 'repipe specialist', 'copper pipe repair', 'PEX repiping', 'leaky pipe fix'],
  openGraph: {
    title: 'Pipe Repair & Repiping Services in Denver, CO',
    description: 'From minor leak repairs to full home repiping, our Denver plumbers handle all types of pipe materials and issues. We offer durable, long-lasting solutions.',
    url: 'https://www.peachtreeplumbing5280.com/services/pipe-repair',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pipe Repair & Repiping Services in Denver, CO',
    description: 'From minor leak repairs to full home repiping, our Denver plumbers handle all types of pipe materials and issues. We offer durable, long-lasting solutions.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/pipe-repair',
  },
};

const faqItems = [
  {
    question: "Should I repair or repipe my home?",
    answer: "If you have recurring leaks, low water pressure, or discolored water, it may be time to consider a full repipe. For newer homes with an isolated leak, a simple repair is often sufficient. We can assess your plumbing system and help you make an informed decision.",
  },
  {
    question: "What are the benefits of PEX piping?",
    answer: "PEX (cross-linked polyethylene) is a modern piping material that is flexible, resistant to corrosion, and more affordable to install than traditional copper. It is an excellent choice for repiping projects and can improve your home’s plumbing reliability.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/pipe-repair',
      'url': 'https://www.peachtreeplumbing5280.com/services/pipe-repair',
      'name': 'Pipe Repair & Repiping Services in Denver, CO',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'From minor leak repairs to full home repiping, our Denver plumbers handle all types of pipe materials and issues. We offer durable, long-lasting solutions.'
    },
    {
      '@type': 'Service',
      'serviceType': 'Pipe Repair and Repiping',
      'provider': {
        '@type': 'Plumber',
        'name': 'Peach Tree Plumbing'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': 'Comprehensive pipe repair and repiping services for residential and commercial properties.'
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

const PipeRepairPage = () => {
  return (
    <div className="container mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">Pipe Repair and Repiping</h1>
            <div className="post-meta text-center mb-5">
              <span>Durable Solutions for Your Plumbing System</span>
            </div>
            <div className={styles.markdownContent}>
              <p>The pipes that make up your plumbing system are out of sight, but they are essential to your home’s comfort and safety. Whether you’re dealing with a minor leak, a burst pipe, or aging, corroded pipes, Peach Tree Plumbing offers comprehensive repair and repiping services. We work with all common pipe materials, including copper, galvanized steel, and modern PEX piping, to provide the best solution for your situation.</p>
              <h2 className="fw-bold mt-5 mb-3">When to Consider Repiping</h2>
              <ul>
                <li><strong>Aging Plumbing:</strong> If your home was built before the 1970s, your pipes may be nearing the end of their lifespan.</li>
                <li><strong>Low Water Pressure:</strong> Corrosion and mineral buildup inside pipes can restrict water flow, leading to frustratingly low pressure.</li>
                <li><strong>Discolored Water:</strong> Rusty or brown water is a clear sign that your pipes are corroding from the inside out.</li>
                <li><strong>Frequent Leaks:</strong> One leak can be an anomaly, but multiple leaks over a short period indicate a systemic problem.</li>
              </ul>
              <p>We can help you determine if a targeted repair or a full-home repipe is the right choice for your property, ensuring a reliable and long-lasting plumbing system.</p>
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

export default PipeRepairPage;
