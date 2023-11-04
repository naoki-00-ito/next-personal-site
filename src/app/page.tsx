import Image from 'next/image';
import { getArticles } from '@/libs/getArticles';
import AlticleList from '@/components/AlticleList';

async function ArticlesCategory() {
  const articles = await getArticles({ tag: 'sentry', max: 4 });

  return (
    <div className='p-index-articles'>
      <AlticleList articles={articles} />
    </div>
  );
}

async function ArticlesTag() {
  const articles = await getArticles({ tag: 'next', max: 4 });

  return (
    <div className='p-index-articles'>
      <AlticleList articles={articles} />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <p>index</p>

      <ArticlesCategory />

      <ArticlesTag />
    </div>
  );
}
