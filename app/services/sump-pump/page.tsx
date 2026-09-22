import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Sump Pump Installation & Repair in Denver, CO',
  description: 'Protect your basement from flooding with our expert sump pump services in Denver. We install, repair, and maintain sump pumps to keep your home safe and dry.',
  keywords: ['sump pump denver', 'sump pump installation', 'sump pump repair', 'basement waterproofing', 'flood prevention'],
  openGraph: {
    title: 'Sump Pump Installation & Repair in Denver, CO',
    description: 'Protect your basement from flooding with our expert sump pump services in Denver. We install, repair, and maintain sump pumps to keep your home safe and dry.',
    url: 'https://www.peachtreeplumbing5280.com/services/sump-pump',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sump Pump Installation & Repair in Denver, CO',
    description: 'Protect your basement from flooding with our expert sump pump services in Denver. We install, repair, and maintain sump pumps to keep your home safe and dry.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/sump-pump',
  },
};

const faqItems = [
  {
    question: "How do I know if my sump pump is working correctly?",
    answer: "You can test your sump pump by pouring a bucket of water into the sump pit. The pump should kick on, remove the water, and then shut off. If it does not, or if it runs continuously, it needs professional attention.",
  },
  {
    question: "Should I have a battery backup for my sump pump?",
    answer: "A battery backup is highly recommended. Storms that cause flooding often knock out the power, which is when you need your sump pump the most. A backup system ensures your basement stays protected even during a power outage.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/sump-pump',
      'url': 'https://www.peachtreeplumbing5280.com/services/sump-pump',
      'name': 'Sump Pump Installation & Repair in Denver, CO',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'Protect your basement from flooding with our expert sump pump services in Denver. We install, repair, and maintain sump pumps to keep your home safe and dry.'
    },
    {
      '@type': 'Service',
      'serviceType': 'Sump Pump Services',
      'provider': {
        '@type': 'Plumber',
        'name': 'Peach Tree Plumbing'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': 'Installation, repair, and maintenance of sump pumps and battery backup systems for flood prevention.'
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

const SumpPumpPage = () => {
  return (
    <div className="container mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">Sump Pump Services</h1>
            <div className="post-meta text-center mb-5">
              <span>Your First Line of Defense Against Flooding</span>
            </div>
            <div className={styles.markdownContent}>
              <p>A functional sump pump is a homeowner&apos;s best friend, especially in areas prone to heavy rain or snowmelt. It is your primary defense against basement flooding, which can cause catastrophic damage to your property. Peach Tree Plumbing provides comprehensive sump pump services, from installation to emergency repairs, to ensure your home stays dry and protected.</p>
              <h2 className="fw-bold mt-5 mb-3">Our Sump Pump Solutions</h2>
              <ul>
                <li><strong>Sump Pump Installation:</strong> We can install a new sump pump system, including the sump pit and discharge piping, to effectively manage groundwater.</li>
                <li><strong>Sump Pump Repair:</strong> If your pump is failing, making strange noises, or not turning on, our experts can diagnose and fix the issue.</li>
                <li><strong>Battery Backup Systems:</strong> We strongly recommend and install battery backup pumps to ensure your system works even when the power goes out.</li>
                <li><strong>Regular Maintenance:</strong> Annual testing and maintenance are key to ensuring your sump pump is ready when you need it most.</li>
              </ul>
              <p>Don&apos;t wait until it’s too late. Protect your home and your peace of mind with our professional sump pump services.</p>
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

export default SumpPumpPage;
