import { supabase } from '@/app/lib/supabase';
import Link from 'next/link';
import { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog Categories',
  description: 'Browse all blog post categories.',
};

async function getCategories() {
  const { data: categories, error } = await supabase
    .from('blog_categories')
    .select('name, slug');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return categories;
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-4 font-lilita-one text-center mb-4">
            Blog Categories
          </h1>
          <p className="lead text-center mb-5">
            Browse our articles by category.
          </p>

          {categories.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {categories.map((category) => (
                <div key={category.slug} className="col">
                  <Link
                    href={`/category/${category.slug}`}
                    className="card h-100 shadow-sm text-decoration-none text-dark"
                  >
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="card-title fw-bold text-center">{category.name}</h5>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p>No categories found.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
