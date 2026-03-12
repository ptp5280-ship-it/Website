import { MetadataRoute } from 'next';
import { supabase } from './lib/supabase';

export const revalidate = 60;

const BASE_URL = 'https://www.peachtreeplumbing5280.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let postEntries: MetadataRoute.Sitemap = [];
  let categoryEntries: MetadataRoute.Sitemap = [];

  try {
    const { data: posts } = await supabase
      .from('blog_posts')
      .select('slug, updated_at')
      .eq('is_published', true);

    if (posts) {
      postEntries = posts.map(({ slug, updated_at }) => ({
        url: `${BASE_URL}/${slug}`,
        lastModified: updated_at,
        changeFrequency: 'weekly',
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  try {
    const { data: categories } = await supabase
      .from('blog_categories')
      .select('slug, updated_at');

    if (categories) {
      categoryEntries = categories.map(({ slug, updated_at }) => ({
        url: `${BASE_URL}/category/${slug}`,
        lastModified: updated_at,
        changeFrequency: 'weekly',
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error('Error fetching categories for sitemap:', error);
  }

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
     {
      url: `${BASE_URL}/category`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return [...staticPages, ...postEntries, ...categoryEntries];
}
