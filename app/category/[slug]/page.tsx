import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '../lib/supabase';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 60;

async function getCategory(slug: string) {
  const { data, error } = await supabase
    .from('categories')
    .select('*, blog_posts(*)')
    .eq('slug', slug)
    .eq('blog_posts.is_published', true)
    .single();

  if (error || !data) {
    console.error('Error fetching category:', error);
    return notFound();
  }

  return data;
}

export async function generateStaticParams() {
  const { data: categories, error } = await supabase
    .from('categories')
    .select('slug');

  if (error) {
    console.error('Error fetching slugs for generateStaticParams:', error);
    return [];
  }

  if (!categories) {
      return [];
  }

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getCategory(params.slug);

  if (!category) {
    notFound();
  }

  const { name, meta_description, slug } = category;

  return {
    title: name,
    description: meta_description,
    alternates: {
      canonical: `https://www.peachtreeplumbing5280.com/category/${slug}`,
    },
  };
}

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const category = await getCategory(params.slug);

  if (!category) {
    notFound();
  }

  const { name, blog_posts } = category;

  return (
    <div className="container mt-5">
      <h1 className="fw-bold text-center mb-5">{name}</h1>
      <div className="row">
        {blog_posts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <Link href={`/${post.slug}`} className="text-decoration-none">
                <Image
                  src={post.image || 'https://via.placeholder.com/400x200'}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="card-img-top"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title fw-bold">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
              </div>
              <div className="card-footer post-meta">
                <span>
                  Posted on {new Date(post.created_at).toLocaleDateString()}
                </span>
                {post.read_time_minutes && (
                  <span className="ms-2">
                    · {post.read_time_minutes} min read
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
