
import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Bidet Installation Services in Denver, CO',
  description: 'Upgrade your bathroom with a professional bidet installation. We install all types of bidets, including standalone models, bidet seats, and handheld sprayers.',
  keywords: ['bidet installation denver', 'bidet seat installation', 'plumber for bidet', 'bathroom upgrade', 'hygienic plumbing'],
  openGraph: {
    title: 'Bidet Installation Services in Denver, CO',
    description: 'Upgrade your bathroom with a professional bidet installation. We install all types of bidets, including standalone models, bidet seats, and handheld sprayers.',
    url: 'https://www.peachtreeplumbing5280.com/services/bidet-installation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bidet Installation Services in Denver, CO',
    description: 'Upgrade your bathroom with a professional bidet installation. We install all types of bidets, including standalone models, bidet seats, and handheld sprayers.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/bidet-installation',
  },
};

const faqItems = [
  {
    question: "Can you install a bidet on my existing toilet?",
    answer: "Yes, most modern toilets are compatible with bidet seat attachments. We can assess your current toilet and recommend a bidet seat that fits your fixture and your needs.",
  },
  {
    question: "Do I need an electrical outlet near the toilet for a bidet?",
    answer: "Many advanced bidet seats require a nearby GFCI electrical outlet to power features like heated seats, warm water, and air dryers. We can coordinate with an electrician or install the outlet if required.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/bidet-installation',
      'url': 'https://www.peachtreeplumbing5280.com/services/bidet-installation',
      'name': 'Bidet Installation Services in Denver, CO',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'Upgrade your bathroom with a professional bidet installation. We install all types of bidets, including standalone models, bidet seats, and handheld sprayers.'
    },
    {
      '@type': 'Service',
      'serviceType': 'Bidet Installation',
      'provider': {
        '@type': 'Plumber',
        'name': 'Peach Tree Plumbing'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': 'Professional installation of all types of bidets for enhanced bathroom hygiene.'
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

const BidetInstallationPage = () => {
  return (
    <div className="container mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">Bidet Installation</h1>
            <div className="post-meta text-center mb-5">
              <span>Modern Hygiene for Your Home</span>
            </div>
            <div className={styles.markdownContent}>
              <p>Enhance your bathroom experience with the comfort and superior hygiene of a bidet. Peach Tree Plumbing offers professional installation for all types of bidets, from simple attachments to high-tech electronic seats. Our experienced plumbers ensure that your new bidet is installed correctly and functions perfectly, providing a seamless and valuable upgrade to your home.</p>
              <h2 className="fw-bold mt-5 mb-3">Our Bidet Services</h2>
              <ul>
                <li><strong>Bidet Seat Installation:</strong> We install advanced bidet seats on your existing toilet, complete with water connections and electrical hook-ups.</li>
                <li><strong>Standalone Bidet Fixtures:</strong> Our team can install a separate bidet fixture for a complete, traditional bathroom setup.</li>
                <li><strong>Handheld Bidet Sprayers:</strong> We offer installation of handheld sprayers for a simple and effective hygiene solution.</li>
              </ul>
              <p>Ready to upgrade your bathroom? Contact us for a consultation and professional bidet installation.</p>
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

export default BidetInstallationPage;
