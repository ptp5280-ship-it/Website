import React from 'react';
import { Metadata } from 'next';
import ServicesGrid from '../components/ServicesGrid';

export const metadata: Metadata = {
  title: 'Our Plumbing Services in Denver, CO',
  description:
    'Explore our wide range of expert plumbing services in the Denver metro area, from emergency repairs to residential and commercial solutions.',
};

const ServicesPage = () => {
  return (
    <div>
      <h1 className="fw-bold text-center mb-5">Our Services</h1>
      <ServicesGrid />
    </div>
  );
};

export default ServicesPage;
