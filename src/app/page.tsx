import IndexHero from '@/components/client/IndexHero';
import { getArticles } from '@/libs/getArticles';
import { getData } from '@/libs/getData';
import IndexArticle from '@/components/client/IndexArticle';
import Section from '@/components/client/Section';
import IndexProfile from '@/components/client/IndexProfile';

async function ArticlesTech() {
  const articles = await getArticles({ category: 'tech', max: 4 });

  return <IndexArticle articles={articles} />;
}

async function Profile() {
  const profile = await getData({ fileName: 'profile.json' });

  return <IndexProfile items={profile} />;
}

export default function Home() {
  return (
    <>
      <IndexHero />

      <Section background={true}>
        <ArticlesTech />
      </Section>

      <Section background={true}>
        <Profile />
      </Section>

      <p>index</p>

      <div style={{ height: '100vh' }}></div>
    </>
  );
}
