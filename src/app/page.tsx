import IndexHero from '@/components/client/IndexHero';
import { getArticles } from '@/libs/getArticles';
import IndexArticle from '@/components/client/IndexArticle';

async function ArticlesTech() {
  const articles = await getArticles({ category: 'tech', max: 4 });

  return (
    <IndexArticle articles={articles} />
  );
}

export default function Home() {
  return (
    <>
      <IndexHero />

      <ArticlesTech />

      <p>index</p>

      <div style={{ height: '100vh' }}></div>
    </>
  );
}
