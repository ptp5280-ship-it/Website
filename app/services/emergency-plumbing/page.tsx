import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: '24/7 Emergency Plumbing Services in Denver, CO',
  description: 'Facing a plumbing emergency in Denver? Our team is available 24/7 to handle burst pipes, severe clogs, and other urgent issues. Fast, reliable, and professional.',
  keywords: ['emergency plumbing Denver', '24/7 plumber', 'urgent plumbing repair', 'burst pipe Denver', 'emergency drain cleaning'],
  openGraph: {
    title: '24/7 Emergency Plumbing Services in Denver, CO',
    description: 'Facing a plumbing emergency in Denver? Our team is available 24/7 to handle burst pipes, severe clogs, and other urgent issues. Fast, reliable, and professional.',
    url: 'https://www.peachtreeplumbing5280.com/services/emergency-plumbing',
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Emergency Plumbing Services in Denver, CO',
    description: 'Facing a plumbing emergency in Denver? Our team is available 24/7 to handle burst pipes, severe clogs, and other urgent issues. Fast, reliable, and professional.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/emergency-plumbing',
  },
};

const faqItems = [
  {
    question: "What constitutes a plumbing emergency?",
    answer: "A plumbing emergency is any situation that poses an immediate risk of water damage to your property or threatens your family’s safety. This includes major leaks, burst pipes, sewer backups, and a complete loss of water service.",
  },
  {
    question: "How quickly can you respond to an emergency call?",
    answer: "We prioritize emergency calls and dispatch a qualified plumber to your location as quickly as possible, typically within the hour, to mitigate damage and begin repairs.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/emergency-plumbing',
      'url': 'https://www.peachtreeplumbing5280.com/services/emergency-plumbing',
      'name': '24/7 Emergency Plumbing Services in Denver, CO',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'Facing a plumbing emergency in Denver? Our team is available 24/7 to handle burst pipes, severe clogs, and other urgent issues. Fast, reliable, and professional.'
    },
    {
      '@type': 'Service',
      'serviceType': 'Emergency Plumbing',
      'provider': {
        '@type': 'Plumber',
        'name': 'Peach Tree Plumbing'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': '24/7 rapid response for urgent plumbing issues like burst pipes, sewer backups, and major leaks.'
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

const EmergencyPlumbingPage = () => {
  return (
    <div className="container mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">24/7 Emergency Plumbing</h1>
            <div className="post-meta text-center mb-5">
              <span>Rapid Response When You Need It Most</span>
            </div>
            <div className={styles.markdownContent}>
              <p>Plumbing emergencies don’t wait for business hours. A burst pipe, a backed-up sewer line, or a failed water heater can cause significant damage and disruption at any time. That’s why Peach Tree Plumbing offers 24/7 emergency services to the Denver metro area. Our on-call team is ready to respond quickly and effectively, day or night, to protect your property and restore your peace of mind.</p>
              <h2 className="fw-bold mt-5 mb-3">Our Emergency Plumbing Services</h2>
              <ul>
                <li><strong>Burst Pipe Repair:</strong> We can quickly locate and repair burst or frozen pipes to prevent water damage.</li>
                <li><strong>Sewer and Drain Unclogging:</strong> We handle major blockages that cause backups into your home or business.</li>
                <li><strong>Water Heater Failures:</strong> If your water heater is leaking, we can repair or replace it to prevent flooding and restore your hot water.</li>
                <li><strong>Leak Detection and Repair:</strong> We find and fix hidden leaks before they can cause structural damage or mold growth.</li>
              </ul>
              <p>When you’re facing a plumbing crisis, you can count on us for a fast, professional, and effective response.</p>
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

export default EmergencyPlumbingPage;
