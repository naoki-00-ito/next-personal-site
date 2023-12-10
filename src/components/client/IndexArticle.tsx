'use client';

import { Articles } from '@/types/article';
import TipList from '@/components/server/TipList';
import { useRef } from 'react';
import useToggleClass from '@/hooks/useToggleClass';

const IndexArticle = ({ articles }: { articles: Articles }) => {
  const listRef = useRef(null);

  useToggleClass({ elementRef: listRef, elementsClassName: null, once: true });
  useToggleClass({
    elementRef: null,
    elementsClassName: '.ts-index-article-item',
    once: true,
  });

  return (
    <div className='p-index-article'>
      <ul className='p-index-article__list' ref={listRef}>
        {articles.map((article) => {
          return (
            <li
              className='p-index-article__item ts-index-article-item'
              key={article.slug}
            >
              <a href={`/articles/${article.slug}`} className='p-index-article__link'>
                <h3 className='p-index-article__title'>{article.frontmatter.title}</h3>
                <time className='p-index-article__time'>{article.frontmatter.date}</time>
                <TipList items={article.frontmatter.category} />
                <TipList items={article.frontmatter.tags} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IndexArticle;
