
import { Plumber, WithContext } from "schema-dts";

// Helper to generate a slug from a service title
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const serviceNames = [
  'Emergency Plumbing',
  'Water Heaters',
  'Leak Detection',
  'Pipe Repair',
  'Toilet Repair',
  'Natural Gas Plumbing',
  'Residential Plumbing',
  'Commercial Plumbing',
];

export const services = serviceNames.map(name => ({
  name,
  slug: slugify(name),
  description: `Learn more about our expert ${name.toLowerCase()} services in the Denver metro area. We provide reliable and professional solutions for your home or business.`
}));

export const peachTreePlumbingSchema: WithContext<Plumber> = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Peach Tree Plumbing",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4210 S Galapago St",
    addressLocality: "Englewood",
    addressRegion: "CO",
    postalCode: "80110",
    addressCountry: "US",
  },
  telephone: "720-298-1900",
  areaServed: {
    "@type": "GeoShape",
    description: "The entire Denver metropolitan area, including Arvada, Aurora, Centennial, Englewood, Littleton, Thornton, Westminster and much more.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    itemListElement: services.map(service => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
      },
    })),
  },
};
