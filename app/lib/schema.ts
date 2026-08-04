import { defaultFaqs } from './faqData';

const schemaGraph: Record<string, unknown>[] = [];

schemaGraph.push({
  '@type': 'WebSite',
  '@id': 'https://www.peachtreeplumbing5280.com/#website',
  url: 'https://www.peachtreeplumbing5280.com',
  name: 'Peach Tree Plumbing',
  publisher: {
    '@id': 'https://www.peachtreeplumbing5280.com/#plumber',
  },
});

schemaGraph.push({
  '@type': 'FAQPage',
  mainEntity: defaultFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

schemaGraph.push({
  '@type': 'Plumber',
  '@id': 'https://www.peachtreeplumbing5280.com/#plumber',
  name: 'Peach Tree Plumbing',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4210 S Galapago St',
    addressLocality: 'Englewood',
    addressRegion: 'CO',
    postalCode: '80110',
    addressCountry: 'US',
  },
  telephone: '+1-720-298-1900',
  url: 'https://www.peachtreeplumbing5280.com',
  image: 'https://www.peachtreeplumbing5280.com/PTP-LOGO.jpg',
  openingHours: 'Mo-Fr 08:00-17:00',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '39.7392',
      longitude: '-104.9903',
    },
    geoRadius: '50000',
  },
});

export const peachTreePlumbingSchema = {
  '@context': 'https://schema.org',
  '@graph': schemaGraph,
};
