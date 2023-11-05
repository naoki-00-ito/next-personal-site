'use client';

import Link from 'next/link';
import { Articles } from '@/types/article';
import TipList from '@/components/server/TipList';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const IndexArticle = ({ articles }: { articles: Articles }) => {
  const listRef = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const itemRefs = articles.map(() => useRef(null));

  const didEffect = useRef(false);

  useLayoutEffect(() => {
    if (!didEffect.current) {
      didEffect.current = true;

      gsap.to(listRef.current, {
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top center',
          invalidateOnRefresh: true,
          scrub: true,
          toggleClass: {
            targets: listRef.current,
            className: 'is-active',
          },
        },
      });

      if (itemRefs && itemRefs.length > 0) {
        itemRefs.forEach((ref) => {
          const targetElement = ref.current;

          if (targetElement) {
            gsap.to(targetElement, {
              scrollTrigger: {
                trigger: targetElement,
                start: 'top center',
                invalidateOnRefresh: true,
                scrub: true,
                toggleClass: {
                  targets: targetElement,
                  className: 'is-active',
                },
              },
            });
          }
        });
      }
    }
  });

  return (
    <div className='p-index-article'>
      <ul className='p-index-article__list' ref={listRef}>
        {articles.map((article, index) => {
          return (
            <li
              className='p-index-article__item'
              key={article.slug}
              ref={itemRefs[index]}
            >
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
  );
};

export default IndexArticle;
