import Hero from '@/app/components/Hero';
import Testimonials from '@/app/components/Testimonials';
import Services from '@/app/components/Services';
import CallToAction from '@/app/components/CallToAction';
import ArticleCarousel from '@/app/components/ArticleCarousel';
import FAQ from '@/app/components/FAQ';
import MissionStatement from '@/app/components/MissionStatement';

export const revalidate = 60;

export default function Home() {
  const faqs = [
    {
        question: "What areas do you serve?",
        answer: "We serve the entire Denver metropolitan area, including Arvada, Aurora, Centennial, Englewood, Littleton, Thornton, Westminster and much more."
    },
    {
        question: "Do you offer emergency services?",
        answer: "Yes, we offer 24/7 emergency plumbing services. We understand that plumbing problems don't always happen during regular business hours, so we're always available to help."
    },
    {
        question: "What types of plumbing services do you offer?",
        answer: "We offer a wide range of residential and commercial plumbing services, including: Gas line repair and hooking up bbq's and fire places, Water heater repair and installation, Leak detection and repair, Fixture installation and repair, Garbage disposal repair and installation, And more!"
    },
    {
        question: "Are your plumbers licensed and insured?",
        answer: "Yes, all of our plumbers are licensed and insured in the state of Colorado."
    },
    {
        question: "How much do you charge for your services?",
        answer: "We offer competitive pricing for all of our services. We also offer free estimates, so you'll know the cost of the job before we start."
    },
    {
        question: "What can I do to prevent my pipes from freezing in the winter?",
        answer: "There are a few things you can do to prevent your pipes from freezing in the winter: Insulate your pipes, Let your faucets drip, especially on cold nights, Open your cabinet doors to allow warm air to circulate around your pipes, If you're going out of town, turn off your water and drain your pipes."
    }
  ];

  const generateJsonLd = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    return {
      __html: JSON.stringify(schema)
    };
  };

  return (
    <>
      <Hero />
      <Testimonials />
      <Services />
      <FAQ faqs={faqs} />
      <section id="blog" className="py-5">
        <ArticleCarousel />
      </section>
      <MissionStatement />
      <section id="contact" className="py-5">
        <CallToAction />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd()}
      />
    </>
  );
}
