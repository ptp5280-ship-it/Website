import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Preventive Plumbing Maintenance Plans in Denver, CO',
  description: 'Protect your plumbing system and prevent costly emergencies with our preventive maintenance plans. We offer comprehensive inspections and tune-ups for Denver homeowners.',
  keywords: ['plumbing maintenance denver', 'preventive plumbing', 'plumbing inspection', 'drain cleaning maintenance', 'water heater maintenance'],
  openGraph: {
    title: 'Preventive Plumbing Maintenance Plans in Denver, CO',
    description: 'Protect your plumbing system and prevent costly emergencies with our preventive maintenance plans. We offer comprehensive inspections and tune-ups for Denver homeowners.',
    url: 'https://www.peachtreeplumbing5280.com/services/plumbing-maintenance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preventive Plumbing Maintenance Plans in Denver, CO',
    description: 'Protect your plumbing system and prevent costly emergencies with our preventive maintenance plans. We offer comprehensive inspections and tune-ups for Denver homeowners.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/plumbing-maintenance',
  },
};

const faqItems = [
  {
    question: "What is included in a plumbing maintenance visit?",
    answer: "Our comprehensive maintenance checks include inspecting fixtures for leaks, testing water pressure, checking the water heater, inspecting drains, and assessing the condition of your pipes. We provide a detailed report of our findings and recommend any necessary repairs.",
  },
  {
    question: "How often should I schedule plumbing maintenance?",
    answer: "We recommend an annual plumbing maintenance inspection for most homes. This allows us to catch small problems before they turn into major emergencies, saving you money and stress in the long run.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/plumbing-maintenance',
      'url': 'https://www.peachtreeplumbing5280.com/services/plumbing-maintenance',
      'name': 'Preventive Plumbing Maintenance Plans in Denver, CO',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'Protect your plumbing system and prevent costly emergencies with our preventive maintenance plans. We offer comprehensive inspections and tune-ups for Denver homeowners.'
    },
    {
      '@type': 'Service',
      'serviceType': 'Plumbing Maintenance',
      'provider': {
        '@type': 'Plumber',
        'name': 'Peach Tree Plumbing'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': 'Proactive plumbing inspections and maintenance to prevent future problems and extend the life of your plumbing system.'
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
  ]
};

const PlumbingMaintenancePage = () => {
  return (
    <div className="container mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">Preventive Plumbing Maintenance</h1>
            <div className="post-meta text-center mb-5">
              <span>Proactive Care for Your Plumbing System</span>
            </div>
            <div className={styles.markdownContent}>
              <p>The best way to handle a plumbing emergency is to prevent it from ever happening. At Peach Tree Plumbing, we offer comprehensive preventive maintenance plans designed to keep your plumbing system in top condition. Regular inspections and tune-ups can identify potential issues, extend the life of your pipes and fixtures, and give you peace of mind.</p>
              <h2 className="fw-bold mt-5 mb-3">Our Maintenance Checklist</h2>
              <ul>
                <li><strong>Comprehensive Inspection:</strong> We visually inspect your entire plumbing system, including pipes, fixtures, and water-using appliances.</li>
                <li><strong>Water Heater Tune-Up:</strong> We flush your water heater to remove sediment, check the anode rod, and ensure it’s operating efficiently and safely.</li>
                <li><strong>Drain and Sewer Line Check:</strong> We can perform camera inspections to check for early signs of blockages or pipe damage.</li>
                <li><strong>Water Pressure Test:</strong> High water pressure can damage your pipes and fixtures. We test your pressure and recommend a regulator if needed.</li>
              </ul>
              <p>Invest in the health of your home’s plumbing system. Contact us today to learn more about our preventive maintenance plans.</p>
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

export default PlumbingMaintenancePage;
