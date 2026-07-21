
import { MetadataRoute } from 'next';
import { services } from './lib/schema';
import { SITE_URL } from './lib/config';
import { supabase } from './lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    '',
    '/copyright-notice',
    '/disclaimer',
    '/privacy-policy',
    '/terms-of-service',
    '/category',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.7,
  }));

  const servicePages = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const { data: posts } = await supabase.from('blog_posts').select('slug, updated_at');
  const blogPostUrls = posts?.map(post => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: post.updated_at ? new Date(post.updated_at) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  })) ?? [];

  return [...staticPages, ...servicePages, ...blogPostUrls];
}
