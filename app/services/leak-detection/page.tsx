import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Advanced Leak Detection Services in Denver | Find Hidden Leaks',
  description: 'Suspect a hidden water leak? Our Denver leak detection specialists use advanced acoustic and thermal imaging technology to find and repair leaks with minimal disruption.',
  keywords: ['leak detection Denver', 'water leak specialist', 'find hidden leak', 'slab leak repair', 'thermal leak detection'],
  openGraph: {
    title: 'Advanced Leak Detection Services in Denver | Find Hidden Leaks',
    description: 'Suspect a hidden water leak? Our Denver leak detection specialists use advanced acoustic and thermal imaging technology to find and repair leaks with minimal disruption.',
    url: 'https://www.peachtreeplumbing5280.com/services/leak-detection',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Leak Detection Services in Denver | Find Hidden Leaks',
    description: 'Suspect a hidden water leak? Our Denver leak detection specialists use advanced acoustic and thermal imaging technology to find and repair leaks with minimal disruption.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/leak-detection',
  },
};

const faqItems = [
  {
    question: "What are the signs of a hidden water leak?",
    answer: "Common signs of a hidden leak include an unexpectedly high water bill, the sound of running water when all fixtures are off, damp spots on walls or floors, and musty odors. If you notice any of these, it’s important to act quickly.",
  },
  {
    question: "How does non-invasive leak detection work?",
    answer: "We use specialized equipment like acoustic sensors to listen for the sound of water escaping from pipes and thermal imaging cameras to detect temperature differences caused by water in walls or under floors. This allows us to pinpoint leaks without unnecessary damage to your property.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/leak-detection',
      'url': 'https://www.peachtreeplumbing5280.com/services/leak-detection',
      'name': 'Advanced Leak Detection Services in Denver | Find Hidden Leaks',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'Suspect a hidden water leak? Our Denver leak detection specialists use advanced acoustic and thermal imaging technology to find and repair leaks with minimal disruption.'
    },
    {
      '@type': 'Service',
      'serviceType': 'Leak Detection',
      'provider': {
        '@type': 'Plumber',
        'name': 'Peach Tree Plumbing'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': 'Non-invasive leak detection services to find hidden water and gas leaks quickly and accurately.'
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

const LeakDetectionPage = () => {
  return (
    <div className="container mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">Advanced Leak Detection</h1>
            <div className="post-meta text-center mb-5">
              <span>Protecting Your Property from Hidden Damage</span>
            </div>
            <div className={styles.markdownContent}>
              <p>Even a small water leak can lead to major problems, including structural damage, mold growth, and high water bills. Unfortunately, many leaks occur in places you can’t see—behind walls, under slabs, or in your main service line. Peach Tree Plumbing uses state-of-the-art, non-invasive leak detection technology to accurately locate hidden leaks, saving you time, money, and unnecessary property damage.</p>
              <h2 className="fw-bold mt-5 mb-3">Our Leak Detection Process</h2>
              <ul>
                <li><strong>Acoustic Listening Devices:</strong> We use sensitive microphones to listen for the distinct sound of water escaping from a pipe, even deep underground.</li>
                <li><strong>Thermal Imaging:</strong> Infrared cameras help us spot temperature variations in walls and floors, which can indicate the presence of a hidden water leak.</li>
                <li><strong>Smoke Testing:</strong> For difficult-to-find sewer gas leaks, we can use non-toxic smoke to pinpoint the source of the problem.</li>
                <li><strong>Precise Repairs:</strong> Once the leak is located, we can provide a targeted repair with minimal disruption to your home or business.</li>
              </ul>
              <p>If you suspect a leak, don’t wait for the damage to get worse. Contact us for professional leak detection and repair services.</p>
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

export default LeakDetectionPage;
