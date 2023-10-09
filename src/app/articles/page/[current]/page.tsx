import fs from 'fs';
import { ARTICLE_PAGE_SIZE, ARTICLE_DIR } from '@/env';
import { getArticles } from '@/libs/getArticles';
import AlticleList from '@/components/AlticleList';
import Pagination from '@/components/Pagination';

export async function getStaticPaths() {
  const files = fs.readdirSync(ARTICLE_DIR);
  const count = files.length;

  const paths = range(1, Math.ceil(count / ARTICLE_PAGE_SIZE)).map((i) => ({
    params: { current: i.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

const range = (start: number, end: number, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

export async function ArticlesEachPage({ params }) {
  const currentPage = params.current;

  // 記事全件取得
  const articles = await getArticles({});

  const pages = range(1, Math.ceil(articles.length / ARTICLE_PAGE_SIZE));

  const slicedArticles = articles.slice(
    ARTICLE_PAGE_SIZE * (currentPage - 1),
    ARTICLE_PAGE_SIZE * currentPage
  );

  return (
    <>
      <AlticleList
        articles={slicedArticles}
      />

      <Pagination pages={pages} currentPage={currentPage} />
    </>
  )
}

export default ArticlesEachPage;


