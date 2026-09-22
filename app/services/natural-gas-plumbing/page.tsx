import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Natural Gas Plumbing Services in Denver | Safe & Reliable',
  description: 'Certified natural gas plumbers in Denver for new gas line installation, leak detection, and appliance hook-ups. Safety and compliance are our top priorities.',
  keywords: ['natural gas plumber Denver', 'gas line installation', 'gas leak detection', 'gas appliance hook-up', 'gas line repair'],
  openGraph: {
    title: 'Natural Gas Plumbing Services in Denver | Safe & Reliable',
    description: 'Certified natural gas plumbers in Denver for new gas line installation, leak detection, and appliance hook-ups. Safety and compliance are our top priorities.',
    url: 'https://www.peachtreeplumbing5280.com/services/natural-gas-plumbing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natural Gas Plumbing Services in Denver | Safe & Reliable',
    description: 'Certified natural gas plumbers in Denver for new gas line installation, leak detection, and appliance hook-ups. Safety and compliance are our top priorities.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/natural-gas-plumbing',
  },
};

const faqItems = [
  {
    question: "What should I do if I smell gas?",
    answer: "If you smell natural gas (which has a rotten egg odor), leave the building immediately. Do not use any electronics or create any sparks. Once you are safely outside, call your utility company’s emergency line, and then call us for professional leak detection and repair.",
  },
  {
    question: "Can you install a gas line for my new BBQ or fire pit?",
    answer: "Absolutely. We can safely run new gas lines for outdoor appliances like grills, fire pits, and heaters, as well as for indoor appliances like stoves, dryers, and fireplaces. Proper installation is crucial for safety and performance.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/natural-gas-plumbing',
      'url': 'https://www.peachtreeplumbing5280.com/services/natural-gas-plumbing',
      'name': 'Natural Gas Plumbing Services in Denver | Safe & Reliable',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'Certified natural gas plumbers in Denver for new gas line installation, leak detection, and appliance hook-ups. Safety and compliance are our top priorities.'
    },
    {
      '@type': 'Service',
      'serviceType': 'Natural Gas Plumbing',
      'provider': {
        '@type': 'Plumber',
        'name': 'Peach Tree Plumbing'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': 'Safe and certified installation and repair of natural gas lines and appliances.'
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

const NaturalGasPlumbingPage = () => {
  return (
    <div className="container mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">Natural Gas Plumbing</h1>
            <div className="post-meta text-center mb-5">
              <span>Safe, Certified, and Reliable</span>
            </div>
            <div className={styles.markdownContent}>
              <p>Working with natural gas lines requires specialized training and certification. At Peach Tree Plumbing, our licensed plumbers are qualified to safely install, repair, and maintain natural gas systems. Whether you’re installing a new appliance, running a line for an outdoor grill, or suspect a dangerous gas leak, we put safety and precision first.</p>
              <h2 className="fw-bold mt-5 mb-3">Our Gas Plumbing Expertise</h2>
              <ul>
                <li><strong>Gas Leak Detection and Repair:</strong> We use professional equipment to locate and repair gas leaks, ensuring the safety of your home or business.</li>
                <li><strong>New Gas Line Installation:</strong> We can install new gas lines for furnaces, water heaters, stoves, fireplaces, and outdoor features.</li>
                <li><strong>Appliance Hook-Ups:</strong> Our certified plumbers can safely connect your new gas appliances, from dryers to gourmet kitchen ranges.</li>
                <li><strong>Code Compliance:</strong> We ensure that all gas plumbing work is performed to meet local codes and safety standards.</li>
              </ul>
              <p>For safe and reliable natural gas plumbing services, trust the certified experts at Peach Tree Plumbing.</p>
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

export default NaturalGasPlumbingPage;
