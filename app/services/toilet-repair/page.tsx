import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Toilet Repair and Installation Services in Denver, CO',
  description: 'Leaky or clogged toilet? We offer expert toilet repair and new toilet installation services in Denver. We handle running toilets, poor flushing, and more.',
  keywords: ['toilet repair Denver', 'clogged toilet', 'running toilet fix', 'new toilet installation', 'leaky toilet repair'],
  openGraph: {
    title: 'Toilet Repair and Installation Services in Denver, CO',
    description: 'Leaky or clogged toilet? We offer expert toilet repair and new toilet installation services in Denver. We handle running toilets, poor flushing, and more.',
    url: 'https://www.peachtreeplumbing5280.com/services/toilet-repair',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toilet Repair and Installation Services in Denver, CO',
    description: 'Leaky or clogged toilet? We offer expert toilet repair and new toilet installation services in Denver. We handle running toilets, poor flushing, and more.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/toilet-repair',
  },
};

const faqItems = [
  {
    question: "Why is my toilet constantly running?",
    answer: "A running toilet is usually caused by a faulty flapper or fill valve inside the tank. This wastes a significant amount of water and should be repaired promptly. We can easily replace these inexpensive parts to solve the problem.",
  },
  {
    question: "Can you install a new, more efficient toilet?",
    answer: "Yes, we can help you select and install a new high-efficiency toilet that uses less water per flush, saving you money on your water bill and reducing your environmental impact. Modern toilets also offer improved flushing power.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/toilet-repair',
      'url': 'https://www.peachtreeplumbing5280.com/services/toilet-repair',
      'name': 'Toilet Repair and Installation Services in Denver, CO',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'Leaky or clogged toilet? We offer expert toilet repair and new toilet installation services in Denver. We handle running toilets, poor flushing, and more.'
    },
    {
      '@type': 'Service',
      'serviceType': 'Toilet Repair and Installation',
      'provider': {
        '@type': 'Plumber',
        'name': 'Peach Tree Plumbing'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': 'Professional repair and installation for all types of toilets, including clogs, leaks, and flushing issues.'
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

const ToiletRepairPage = () => {
  return (
    <div className="container mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">Toilet Repair and Installation</h1>
            <div className="post-meta text-center mb-5">
              <span>Solving Your Toughest Toilet Troubles</span>
            </div>
            <div className={styles.markdownContent}>
              <p>A malfunctioning toilet can be a major inconvenience and a source of stress. Whether you're dealing with a stubborn clog, a constant running sound, a leak at the base, or you’re ready to upgrade to a more efficient model, Peach Tree Plumbing has you covered. Our experienced plumbers can quickly diagnose the problem and provide a reliable, long-lasting solution.</p>
              <h2 className="fw-bold mt-5 mb-3">Common Toilet Problems We Solve</h2>
              <ul>
                <li><strong>Clogged Toilets:</strong> We can clear even the most stubborn clogs without damaging your pipes or toilet.</li>
                <li><strong>Running Toilets:</strong> A toilet that constantly runs can waste hundreds of gallons of water. We can fix the internal components to stop the waste.</li>
                <li><strong>Leaky Toilets:</strong> Leaks around the base of the toilet can damage your flooring and subfloor. We can replace the wax ring and ensure a tight seal.</li>
                <li><strong>New Toilet Installation:</strong> We can help you choose and install a new toilet that fits your needs and budget, including high-efficiency and comfort-height models.</li>
              </ul>
              <p>Don’t let toilet troubles disrupt your life. Contact us for fast and professional toilet repair and installation services.</p>
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

export default ToiletRepairPage;
