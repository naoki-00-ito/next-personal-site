import { ARTICLE_PAGE_SIZE } from '@/env';
import { getArticles } from '@/libs/getArticles';
import AlticleList from '@/components/server/AlticleList';
import Pagination from '@/components/server/Pagination';

const range = (start: number, end: number, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

async function ArticlesCategoryPage({ params: { slug } }: { params: { slug: string } }) {
  const currentPage = 1;

  // 指定カテゴリの記事のみ、全件取得
  const articles = await getArticles({ category: slug });

  const pages = range(1, Math.ceil(articles.length / ARTICLE_PAGE_SIZE));

  const slicedArticles = articles.slice(
    ARTICLE_PAGE_SIZE * (currentPage - 1),
    ARTICLE_PAGE_SIZE * currentPage,
  );

  return (
    <>
      <AlticleList articles={slicedArticles} />

      <Pagination
        pages={pages}
        currentPage={currentPage}
        baseUrl={`/articles/category/${slug}/page/`}
      />
    </>
  );
}

export default ArticlesCategoryPage;
