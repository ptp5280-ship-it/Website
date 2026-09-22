import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Water Heater Repair & Installation in Denver, CO',
  description: 'Expert water heater services in Denver. We repair, replace, and maintain both traditional tank and tankless water heaters for reliable hot water.',
  keywords: ['water heater repair denver', 'tankless water heater', 'water heater installation', 'hot water heater denver', 'water heater replacement'],
  openGraph: {
    title: 'Water Heater Repair & Installation in Denver, CO',
    description: 'Expert water heater services in Denver. We repair, replace, and maintain both traditional tank and tankless water heaters for reliable hot water.',
    url: 'https://www.peachtreeplumbing5280.com/services/water-heater',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Heater Repair & Installation in Denver, CO',
    description: 'Expert water heater services in Denver. We repair, replace, and maintain both traditional tank and tankless water heaters for reliable hot water.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/water-heater',
  },
};

const faqItems = [
  {
    question: "How long does a typical water heater last?",
    answer: "A traditional tank water heater typically lasts 8-12 years, while a tankless water heater can last 20 years or more with proper maintenance. If your water heater is approaching the end of its lifespan, it\'s wise to consider a replacement to avoid an emergency.",
  },
  {
    question: "What are the benefits of a tankless water heater?",
    answer: "Tankless water heaters provide hot water on demand, are more energy-efficient because they don\'t have to keep a tank of water hot, and have a longer lifespan than traditional models. While the upfront cost is higher, they can save you money in the long run.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/water-heater',
      'url': 'https://www.peachtreeplumbing5280.com/services/water-heater',
      'name': 'Water Heater Repair & Installation in Denver, CO',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'Expert water heater services in Denver. We repair, replace, and maintain both traditional tank and tankless water heaters for reliable hot water.'
    },
    {
      '@type': 'Service',
      'serviceType': 'Water Heater Services',
      'provider': {
        '@type': 'Plumber',
        'name': 'Peach Tree Plumbing'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': 'Professional repair, installation, and maintenance for tank and tankless water heaters.'
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

const WaterHeaterPage = () => {
  return (
    <div className="container mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">Water Heater Services</h1>
            <div className="post-meta text-center mb-5">
              <span>Reliable Hot Water for Your Home</span>
            </div>
            <div className={styles.markdownContent}>
              <p>Hot water is a daily necessity. When your water heater fails, it can disrupt your entire routine. Peach Tree Plumbing offers expert water heater repair, replacement, and maintenance services to ensure you have a reliable supply of hot water. We have experience with all major brands and models, including both traditional storage tank and modern tankless systems.</p>
              <h2 className="fw-bold mt-5 mb-3">Our Water Heater Solutions</h2>
              <ul>
                <li><strong>Water Heater Repair:</strong> We can diagnose and fix common issues like no hot water, lukewarm water, strange noises, or minor leaks.</li>
                <li><strong>Water Heater Installation & Replacement:</strong> We can help you choose the right water heater for your home’s needs and budget, and provide a professional installation.</li>
                <li><strong>Tankless Water Heaters:</strong> Interested in upgrading to an energy-efficient tankless model? We specialize in the installation and service of on-demand water heaters.</li>
                <li><strong>Preventive Maintenance:</strong> Regular maintenance, such as flushing the tank, can extend the life of your water heater and prevent unexpected failures.</li>
              </ul>
              <p>Whether you need an emergency repair or are planning an upgrade, contact us for professional water heater services in the Denver area.</p>
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

export default WaterHeaterPage;
