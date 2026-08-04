import { MetadataRoute } from 'next';
import { getAllPosts } from './lib/blog';
import { services } from './lib/services';
import { SITE_URL } from './lib/config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base static routes from the file system
  const routes = [
    '',
    '/copyright-notice',
    '/disclaimer',
    '/privacy-policy',
    '/terms-of-service',
    '/services',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  // Dynamically add all blog posts
  const posts = (await getAllPosts()).map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: new Date(post.created_at),
  }));

  // Dynamically add all service pages
  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...posts, ...serviceRoutes];
}
