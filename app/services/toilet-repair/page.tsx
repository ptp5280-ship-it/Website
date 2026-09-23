import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';
import CallToAction from '../../components/CallToAction';

export const metadata: Metadata = {
  title: 'Expert Toilet Repair & Installation in Denver, CO | Peach Tree Plumbing',
  description: 'Dealing with a clogged, running, or leaky toilet in Denver? Peach Tree Plumbing offers fast, reliable toilet repair and installation services. Call us today!',
  keywords: ['toilet repair Denver', 'clogged toilet Denver', 'running toilet fix', 'leaky toilet repair', 'new toilet installation Denver', 'toilet installation', 'plumber for toilet repair', 'emergency toilet repair'],
  openGraph: {
    title: 'Expert Toilet Repair & Installation in Denver, CO | Peach Tree Plumbing',
    description: 'Dealing with a clogged, running, or leaky toilet in Denver? Peach Tree Plumbing offers fast, reliable toilet repair and installation services. Call us today!',
    url: 'https://www.peachtreeplumbing5280.com/services/toilet-repair',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Toilet Repair & Installation in Denver, CO | Peach Tree Plumbing',
    description: 'Dealing with a clogged, running, or leaky toilet in Denver? Peach Tree Plumbing offers fast, reliable toilet repair and installation services. Call us today!',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/toilet-repair',
  },
};

const faqItems = [
  {
    question: "Why is my toilet constantly running?",
    answer: "A running toilet is most often caused by a faulty flapper that no longer seals properly or a malfunctioning fill valve. This constant water flow can waste over 200 gallons a day! Our plumbers can quickly diagnose the issue and replace the worn-out parts to stop the waste and save you money.",
  },
  {
    question: "What's involved in installing a new toilet?",
    answer: "Our comprehensive toilet installation service includes carefully removing your old toilet, inspecting the flange and water supply line, professionally setting the new toilet with a high-quality wax ring, and ensuring it is perfectly level and functions flawlessly. We handle everything from start to finish.",
  },
  {
    question: "Can I prevent toilet clogs?",
    answer: "Yes! To prevent clogs, avoid flushing anything other than human waste and toilet paper. Be cautious with \"flushable\" wipes, as they are a common cause of clogs. Also, be mindful not to use excessive amounts of toilet paper.",
  },
  {
    question: "How can I tell if my toilet has a silent leak?",
    answer: "A great way to check for a silent leak in the tank is to add a few drops of food coloring to the toilet tank water. Wait about 15-20 minutes without flushing. If you see the colored water appear in the toilet bowl, you have a leak from the tank, likely from a worn-out flapper.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/toilet-repair',
      'url': 'https://www.peachtreeplumbing5280.com/services/toilet-repair',
      'name': 'Expert Toilet Repair & Installation in Denver, CO | Peach Tree Plumbing',
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
            <h1 className="fw-bold mb-4 text-center">Expert Toilet Repair & Installation in Denver</h1>
            <div className="post-meta text-center mb-5">
              <span>Your Go-To Solution for All Toilet Troubles</span>
            </div>
            <div className={styles.markdownContent}>
                <p>A malfunctioning toilet is more than just an inconvenience—it can disrupt your daily routine, waste significant amounts of water, and even lead to water damage. Whether you're dealing with a stubborn clog, a toilet that won't stop running, or you're considering an upgrade, Peach Tree Plumbing provides expert, reliable solutions in the Denver metro area.</p>
                
                <h2 className="fw-bold mt-5 mb-3">Comprehensive Toilet Repair Services</h2>
                <p>Our experienced plumbers have seen it all. We arrive with fully stocked trucks, ready to diagnose and resolve your toilet issue efficiently. Our services include:</p>
                <ul>
                    <li><strong>Clogged Toilet Repair:</strong> Stubborn clogs can be caused by foreign objects, excessive paper, or deeper sewer line issues. We use professional tools to clear the obstruction safely without risking damage to your pipes or toilet bowl.</li>
                    <li><strong>Running Toilet Fixes:</strong> A running toilet can waste hundreds of gallons of water per day, driving up your utility bills. This is often due to a faulty flapper or fill valve. We can quickly replace these components to restore proper function.</li>
                    <li><strong>Leaky Toilet Repair:</strong> A leak at the base of your toilet can damage your flooring, subfloor, and even the ceiling below. We can identify the source of the leak, often a failed wax ring, and perform the necessary repairs to protect your home.</li>
                    <li><strong>Weak Flush Correction:</strong> If your toilet has a weak flush or requires multiple flushes, it may be due to clogged rim jets or an incorrect water level in the tank. We can resolve these issues to restore full flushing power.</li>
                </ul>

                <h2 className="fw-bold mt-5 mb-3">Professional Toilet Installation & Upgrades</h2>
                <p>Ready to upgrade your bathroom with a new, more efficient toilet? We can help you select and install the perfect model for your home. We specialize in:</p>
                <ul>
                    <li><strong>High-Efficiency Toilets:</strong> Lower your water consumption and environmental footprint with a modern, low-flow toilet that doesn't sacrifice performance.</li>
                    <li><strong>Comfort Height Toilets:</strong> These models are taller than standard toilets, making them more accessible and comfortable for many users.</li>
                    <li><strong>Dual-Flush Toilets:</strong> Gain control over your water usage with a dual-flush system, offering a partial flush for liquid waste and a full flush for solid waste.</li>
                </ul>

                <h2 className="fw-bold mt-5 mb-3">Why Choose Peach Tree Plumbing?</h2>
                <p>When you call us for your toilet repair or installation needs, you can expect:</p>
                <ul>
                    <li><strong>Experienced & Licensed Plumbers:</strong> Our team is fully trained and insured.</li>
                    <li><strong>Upfront & Honest Pricing:</strong> We provide clear, transparent pricing before any work begins.</li>
                    <li><strong>Fast & Reliable Service:</strong> We prioritize your needs and work efficiently to get the job done right.</li>
                    <li><strong>Satisfaction Guaranteed:</strong> We stand behind our workmanship with a commitment to quality.</li>
                </ul>
                
                <CallToAction />
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
