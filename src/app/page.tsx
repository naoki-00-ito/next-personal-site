import IndexHero from '@/components/client/IndexHero';
import { getArticles } from '@/libs/getArticles';
import IndexArticle from '@/components/client/IndexArticle';
import Section from '@/components/client/Section';

async function ArticlesTech() {
  const articles = await getArticles({ category: 'tech', max: 4 });

  return <IndexArticle articles={articles} />;
}

export default function Home() {
  return (
    <>
      <IndexHero />

      <Section background={true}>
        <ArticlesTech />
      </Section>

      <p>index</p>

      <div style={{ height: '100vh' }}></div>
    </>
  );
}
