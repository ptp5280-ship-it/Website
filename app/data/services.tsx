import React from 'react';
import {
  FaTools,
  FaFaucet,
  FaExclamationTriangle,
  FaToilet,
  FaFire,
  FaHome,
  FaBuilding,
  FaThermometerHalf,
  FaShower,
  FaShieldAlt,
  FaTasks,
} from 'react-icons/fa';

// Helper function to create SEO-friendly slugs
export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

export const services = [
  {
    title: 'Emergency Plumbing',
    description: '24/7 emergency services for all your plumbing needs.',
    icon: <FaExclamationTriangle />,
  },
  {
    title: 'Leak Detection',
    description: 'Advanced leak detection to protect your home from water damage.',
    icon: <FaFaucet />,
  },
  {
    title: 'Pipe Repair',
    description: 'Comprehensive pipe repair and replacement services.',
    icon: <FaTools />,
  },
  {
    title: 'Toilet Repair',
    description: 'Repair and installation of all types of toilets and fixtures.',
    icon: <FaToilet />,
  },
  {
    title: 'Water Heater',
    description: 'Expert repair, installation, and maintenance of water heaters.',
    icon: <FaThermometerHalf />,
  },
  {
    title: 'Bidet Installation',
    description: 'Professional installation of all bidet types and models.',
    icon: <FaShower />,
  },
  {
    title: 'Sump Pump',
    description: 'Protect your basement from flooding with our sump pump services.',
    icon: <FaShieldAlt />,
  },
  {
    title: 'Plumbing Maintenance',
    description: 'Preventive plans to keep your plumbing system running smoothly.',
    icon: <FaTasks />,
  },
  {
    title: 'Natural Gas Plumbing',
    description: 'Safe and reliable installation and repair of natural gas lines.',
    icon: <FaFire />,
  },
  {
    title: 'Residential Plumbing',
    description: 'Reliable and efficient plumbing solutions for your home.',
    icon: <FaHome />,
  },
  {
    title: 'Commercial Plumbing',
    description: 'Equipped to handle the complex plumbing needs of your business.',
    icon: <FaBuilding />,
  },
];
