
import React from 'react';
import Services from '../components/Services';

export const metadata = {
  title: 'Our Services | Peach Tree Plumbing',
  description: 'Explore the comprehensive range of expert plumbing services offered by Peach Tree Plumbing in the Denver metro area, from emergency repairs to full-scale installations.',
};

const ServicesPage = () => {
  return (
    <>
      <div className="container mt-5 py-5">
          <header className="mb-4 text-center">
              <h1 className="display-4 fw-bold">Our Services</h1>
              <p className="lead">Providing expert, reliable plumbing solutions for your home and business. Explore our services below to find the right one for you.</p>
          </header>
          <hr className="my-4" />
      </div>
      <Services />
    </>
  );
};

export default ServicesPage;
