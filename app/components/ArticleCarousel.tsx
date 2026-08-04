import { getAllPosts } from '../lib/blog';
import ArticleCarouselClient from './ArticleCarousel.client';

const ArticleCarousel = async () => {
  const articles = await getAllPosts();

  return <ArticleCarouselClient articles={articles} />;
};

export default ArticleCarousel;
