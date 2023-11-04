'use client'

import Link from 'next/link';
import { Articles } from '@/types/article';
import TipList from '@/components/server/TipList';
import Background from '@/components/client/Background';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const IndexArticle = ({ articles }: { articles: Articles }) => {
  const articleRef = useRef(null);
  const didEffect = useRef(false);

  const articleInsideRef = useRef(null);
  const articleListRef = useRef(null);

  useEffect(() => {
    if (!didEffect.current) {
      gsap.to(
        articleRef.current,
        {
          color: 'var(--color-light)',
          scrollTrigger: {
            trigger: articleRef.current,
            start: 'top center',
          },
        }
      );

      const listWrapperEl = articleRef.current;
      const listEl = articleListRef.current;

      if (listWrapperEl !== null && listEl !== null) {

        gsap.to(listEl, {
          x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: listWrapperEl,
            start: 'top center',
            end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }


    }
  }, []);

  return (
    <div className="p-index-article" ref={articleRef}>
      <Background />
      <div className="p-index-article__inside" ref={articleInsideRef}>
        <ul className='p-index-article__list' ref={articleListRef}>
          {articles.map((article) => {
            return (
              <li className='p-index-article__item ts-article-item' key={article.slug}>
                <Link href={`/articles/${article.slug}`} className='p-index-article__link'>
                  <h3 className='p-index-article__title'>{article.frontmatter.title}</h3>
                  <time className='p-index-article__time'>{article.frontmatter.date}</time>
                  <TipList items={article.frontmatter.category} />
                  <TipList items={article.frontmatter.tags} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default IndexArticle;