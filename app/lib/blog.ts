import { supabase } from './supabase';

export async function getAllPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id,slug,title,excerpt,created_at') // Also fetch created_at for the sitemap
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
  return data;
}
