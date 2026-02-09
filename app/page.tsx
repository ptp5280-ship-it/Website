import Hero from '@/app/components/Hero';
import Testimonials from '@/app/components/Testimonials';
import Services from '@/app/components/Services';
import CallToAction from '@/app/components/CallToAction';
import ArticleCarousel from '@/app/components/ArticleCarousel';
import FAQ from '@/app/components/FAQ';
import MissionStatement from '@/app/components/MissionStatement';
import { defaultFaqs } from '@/app/lib/faqData';

export const revalidate = 60;

export default function Home() {

  const generateJsonLd = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": defaultFaqs.map(faq => ({
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
      <FAQ faqs={defaultFaqs} />
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
