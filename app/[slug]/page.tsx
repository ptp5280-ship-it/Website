import React from 'react';
import Image from 'next/image';
import { supabase } from '../lib/supabase';
import { notFound } from 'next/navigation';
import Markdown from '../components/Markdown';
import { Metadata } from 'next';
import FAQ from '../components/FAQ';
import '../styles/markdown.css'; // <--- CORRECTIVE ACTION

export const revalidate = 60;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.meta_title,
    description: post.meta_description,
    keywords: post.secondary_keywords,
    openGraph: {
      title: post.meta_title,
      description: post.meta_description,
      url: `https://www.peachtreeplumbing5280.com/${post.slug}`,
      images: [
        {
          url: post.image || 'https://www.peachtreeplumbing5280.com/PTP-LOGO.jpg',
          width: 800,
          height: 600,
          alt: post.alt_text || post.focus_keyword,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta_title,
      description: post.meta_description,
      images: [post.image || 'https://www.peachtreeplumbing5280.com/PTP-LOGO.jpg'],
    },
    alternates: {
      canonical:
        post.canonical_url || `https://www.peachtreeplumbing5280.com/${post.slug}`,
    },
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SupabaseFaqItem {
  name: string;
  acceptedAnswer: {
    text: string;
  };
}

async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error || !data) {
    console.error('Error fetching blog post:', error);
    notFound();
  }

  return data;
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getBlogPost(params.slug);

  const faqItems: FAQItem[] =
    post.faq_json && Array.isArray(post.faq_json.mainEntity)
      ? post.faq_json.mainEntity.map((item: SupabaseFaqItem) => ({
          question: item.name,
          answer: item.acceptedAnswer.text,
        }))
      : [];

  // --- Start of Centralized JSON-LD Schema ---
  const schemaGraph: Record<string, unknown>[] = [];

  schemaGraph.push({
    '@type': 'BlogPosting',
    '@id': `https://www.peachtreeplumbing5280.com/${post.slug}`,
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://www.peachtreeplumbing5280.com/${post.slug}`
    },
    headline: post.title,
    description: post.excerpt,
    image: post.image || 'https://www.peachtreeplumbing5280.com/PTP-LOGO.jpg',
    author: {
      '@type': 'Organization',
      name: 'Peach Tree Plumbing',
      url: 'https://www.peachtreeplumbing5280.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Peach Tree Plumbing',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.peachtreeplumbing5280.com/PTP-LOGO.jpg',
      },
    },
    datePublished: new Date(post.created_at).toISOString(),
    dateModified: new Date(post.updated_at).toISOString(),
  });

  if (faqItems.length > 0) {
    schemaGraph.push({
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

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
  });
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph,
  };

  return (
    <div className="container my-5 blog-post-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h1 className="fw-bold mb-4 text-center">{post.title}</h1>
          <div className="text-muted text-center mb-5">
            <span>
              Posted on {new Date(post.created_at).toLocaleDateString()}
            </span>
            {post.read_time_minutes && <span className="mx-2">·</span>}
            {post.read_time_minutes && (
              <span>{post.read_time_minutes} min read</span>
            )}
          </div>
          <Image
            src={post.image || 'https://via.placeholder.com/800x400'}
            alt={post.title}
            width={800}
            height={400}
            priority={true}
            className="img-fluid rounded mb-5 shadow"
          />
          <div className="markdown-content">
            <Markdown content={post.content} />
          </div>

          {faqItems.length > 0 && (
            <div className="mt-5">
              <h2 className="fw-bold mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <FAQ faqs={faqItems} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
