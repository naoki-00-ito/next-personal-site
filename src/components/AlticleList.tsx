import Link from 'next/link';
import { Articles } from '@/types/article';
import TipList from '@/components/TipList';

const AlticleList = ({ articles }: { articles: Articles }) => {
  return (
    <ul className="p-article-list">
      {articles.map((article) => {
        return (
          <li className="p-article-list__item" key={article.slug}>
            <Link href={`/articles/${article.slug}`} className='p-article-list__link'>
              <h3 className="p-article-list__title">
                {article.frontmatter.title}
              </h3>

              <time className="p-article-list__time">
                {article.frontmatter.date}
              </time>

              <TipList
                items={article.frontmatter.category}
              />

              <TipList
                items={article.frontmatter.tags}
              />

            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default AlticleList;