
import React from 'react';
import { Metadata } from 'next';
import styles from '../../styles/Markdown.module.css';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Expert Residential Plumbing Services for Denver Homeowners',
  description: 'Your trusted Denver plumber for all home plumbing needs. We specialize in fixture repair, toilet installation, drain cleaning, sump pumps, and water heater services with a focus on quality.',
  keywords: ['residential plumber denver', 'home plumbing repair denver', 'faucet installation denver', 'toilet repair denver', 'sump pump services', 'water heater repair denver', 'denver plumber', 'plumbing services'],
  openGraph: {
    title: 'Expert Residential Plumbing Services for Denver Homeowners',
    description: 'Your trusted Denver plumber for all home plumbing needs. We specialize in fixture repair, toilet installation, drain cleaning, sump pumps, and water heater services with a focus on quality.',
    url: 'https://www.peachtreeplumbing5280.com/services/residential-plumbing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Residential Plumbing Services for Denver Homeowners',
    description: 'Your trusted Denver plumber for all home plumbing needs. We specialize in fixture repair, toilet installation, drain cleaning, sump pumps, and water heater services with a focus on quality.',
  },
  alternates: {
    canonical: 'https://www.peachtreeplumbing5280.com/services/residential-plumbing',
  },
};

const faqItems = [
  {
    question: "What are the most common plumbing problems you see in Denver homes?",
    answer: "Common issues we handle daily include clogged drains (especially kitchen sinks and main sewers), leaking faucets and toilets, failing water heaters due to our hard water, and sump pump failures during heavy rains. Many older Denver homes also have issues with aging galvanized pipes.",
  },
  {
    question: "Is it better to repair my old toilet or just replace it?",
    answer: "If your toilet is constantly clogging, running, or has been repaired multiple times, it's often more cost-effective to replace it. Modern toilets are far more water-efficient, so a new one can save you significant money on your water bill, paying for itself over time.",
  },
  {
    question: "Why do my drains keep getting clogged?",
    answer: "Recurring clogs are often due to what goes down the drain—grease and coffee grounds in the kitchen, hair in the shower. However, it can also be a sign of a larger problem in your main sewer line, such as tree root intrusion or a sagging pipe (a 'belly'). If you're experiencing frequent backups, we recommend a sewer camera inspection.",
  },
  {
    question: "What does it mean to be a 'master plumber'?",
    answer: "A Master Plumber is a tradesperson who has achieved the highest level of certification in the plumbing profession. It requires years of documented work experience under another master plumber and passing a comprehensive state examination covering plumbing code, theory, and practical application. It signifies a proven level of expertise and professionalism.",
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.peachtreeplumbing5280.com/services/residential-plumbing',
      'url': 'https://www.peachtreeplumbing5280.com/services/residential-plumbing',
      'name': 'Expert Residential Plumbing Services for Denver Homeowners',
      'isPartOf': {
        '@id': 'https://www.peachtreeplumbing5280.com'
      },
      'description': 'Complete residential plumbing services in Denver, from emergency repairs to new installations. We are your trusted partner for a healthy home plumbing system.'
    },
    {
      '@type': 'PlumbingBusiness',
      'name': 'Peach Tree Plumbing',
      'serviceType': 'Residential Plumbing',
      'areaServed': {
        '@type': 'City',
        'name': 'Denver'
      },
      'description': 'Full-service residential plumbing contractor in Denver, providing expert repairs and installations for faucets, toilets, water heaters, and drain systems.',
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
    }
  ]
};

const ResidentialPlumbingPage = () => {
  return (
    <>
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <article>
            <h1 className="fw-bold mb-4 text-center">The Denver Homeowner’s Guide to Residential Plumbing</h1>
            <div className="post-meta text-center mb-5">
              <span>Your Partner in a Safe and Functional Home</span>
            </div>
            <div className={styles.markdownContent}>
              <p>Your home’s plumbing system is the unsung hero of your daily life. It’s a complex network that you rely on for cooking, cleaning, sanitation, and comfort. As a master plumber who has served the Denver community for decades, I’ve seen every type of residential plumbing issue imaginable—from simple annoyances to complex emergencies. My philosophy has always been the same: treat every home with the respect it deserves, provide honest and transparent solutions, and ensure every job is done to the highest standard of quality and safety.</p>
              <p>This page serves as a comprehensive overview of the residential plumbing services we provide. We are not just service providers; we are your partners in maintaining a safe, healthy, and functional home for your family.</p>

              <h2 className="fw-bold mt-5 mb-3">Kitchen Plumbing: The Heart of the Home</h2>
              <p>The kitchen is often the busiest hub in a home, and its plumbing is central to its function.</p>
              <ul>
                <li><strong>Faucet Repair and Installation:</strong> A dripping faucet is more than just an annoyance; it’s a waste of money and water. We can repair worn-out seals and cartridges on your existing faucet or help you upgrade to a new, more efficient model, such as a hands-free or pull-down sprayer faucet.</li>
                <li><strong>Garbage Disposal Repair and Replacement:</strong> A jammed or humming garbage disposal can bring kitchen cleanup to a halt. We can often dislodge foreign objects or reset the unit. If the motor is burned out, we can install a new, powerful disposal that meets your family’s needs.</li>
                <li><strong>Dishwasher Installation:</strong> We ensure your new dishwasher is connected correctly, with a proper high loop in the drain line to prevent backflow and ensure sanitary operation.</li>
                <li><strong>Clogged Sink Drains:</strong> Kitchen sinks are prone to clogs from grease, food scraps, and soap scum. Our powerful drain snakes can cut through the toughest blockages and restore flow quickly.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-3">Bathroom Plumbing: Sanitation and Comfort</h2>
              <p>From a running toilet to a full bathroom remodel, we handle all aspects of bathroom plumbing with expertise.</p>
              <ul>
                <li><strong>Toilet Repair and Installation:</strong> A running toilet can waste hundreds of gallons of water a day. We can diagnose and fix the issue, whether it’s a simple flapper replacement or a new fill valve. If you’re looking to upgrade, we can install a modern, high-efficiency toilet that provides better performance while saving water.</li>
                <li><strong>Clogged Toilets and Drains:</strong> We provide fast and effective service for clogged toilets, sinks, and shower drains, ensuring your bathroom is back in service as soon as possible.</li>
                <li><strong>Shower and Tub Services:</strong> We repair leaky showerheads and tub spouts and can help with valve replacements for remodels, ensuring perfect temperature and pressure control.</li>
                <li><strong>Faucet and Sink Installation:</strong> Upgrading your vanity and faucets can transform the look of your bathroom. We provide meticulous installation for a clean, professional finish.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-3">Utility and Whole-House Plumbing Systems</h2>
              <p>Beyond the kitchen and bath, we manage the core systems that keep your entire home running smoothly.</p>
              <ul>
                <li><strong>Water Heater Repair and Replacement:</strong> Whether you have a traditional tank-style heater or a modern tankless system, we are the experts. From diagnosing a faulty pilot light to installing a brand new, high-efficiency unit, we ensure your family always has reliable hot water. (See our dedicated Water Heater page for more detail).</li>
                <li><strong>Sump Pump Installation and Repair:</strong> In Denver, a functional sump pump is your primary defense against a flooded basement. We install high-quality primary pumps and battery backup systems to protect your property during heavy rains and power outages. (See our Sump Pump page for more).</li>
                <li><strong>Main Sewer Line Cleaning:</strong> If multiple drains in your house are backing up, the problem is likely in your main sewer line. Our powerful augers and hydro-jetting equipment can clear even the most stubborn blockages from roots, grease, or other debris.</li>
                <li><strong>Pipe Repair and Repiping:</strong> From a small leak in a copper pipe to replacing entire sections of old, corroded galvanized pipe, we have the expertise to restore the integrity of your home’s water supply system. (See our Pipe Repair & Repiping page).</li>
                <li><strong>Gas Line Services:</strong> Our certified technicians can safely run new gas lines for appliances, repair leaks, and ensure your home’s gas system is safe and up to code. (See our Natural Gas Plumbing page).</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-3">The Peach Tree Plumbing Difference: Our Commitment to You</h2>
              <p>When you invite one of our plumbers into your home, you are getting more than just a technician. You are getting a dedicated professional who is committed to providing the best possible service.</p>
              <ul>
                <li><strong>Respect for Your Property:</strong> We wear shoe covers, use drop cloths, and clean our work area thoroughly. We leave your home as clean as we found it.</li>
                <li><strong>Transparent, Upfront Pricing:</strong> We diagnose the problem and provide a clear, detailed estimate before any work begins. There are no surprises.</li>
                <li><strong>Quality Workmanship:</strong> We use high-quality parts and materials, and we never cut corners. Our repairs are made to last, and our installations are done with meticulous attention to detail.</li>
                <li><strong>Honest Advice:</strong> We believe in empowering homeowners. We will explain the problem, outline your options, and give you our honest recommendation, even if it’s a simple fix you can do yourself.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-3">Your Trusted Denver Residential Plumber</h2>
              <p>For any plumbing need, big or small, you can count on Peach Tree Plumbing to provide reliable, professional, and courteous service. We are proud to be the trusted plumbing partner for so many homeowners across the Denver area. Contact us today to schedule a service and experience the difference that true professionalism makes.</p>
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
    </>
  );
};

export default ResidentialPlumbingPage;
