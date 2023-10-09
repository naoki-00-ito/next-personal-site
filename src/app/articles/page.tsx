import { getArticles } from '@/libs/getArticles';
import AlticleList from '@/components/AlticleList';

export default async function Articles() {
  const articles = await getArticles({});

  return (
    <AlticleList
      articles={articles}
    />
  );
}