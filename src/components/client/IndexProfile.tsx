'use client';

import useToggleClass from '@/hooks/useToggleClass';
import { useRef } from 'react';
import Image from 'next/image';
import { Profile } from '@/types/profile';

const IndexProfile = ({ items }: { items: Profile }) => {
  const listRef = useRef(null);
  const imageRef = useRef(null);

  useToggleClass({
    elementRef: null,
    elementsClassName: '.ts-index-profile-item',
    once: true,
  });
  useToggleClass({ elementRef: imageRef, elementsClassName: null, once: true });

  return (
    <section className='p-index-profile'>
      <h2 className='p-index-profile__title'>Profile</h2>

      <div className='p-index-profile__main'>
        <div className='p-index-profile__image-wrapper'>
          <picture className='p-index-profile__image' ref={imageRef}>
            <Image src='/images/index/profile.jpg' width={300} height={300} alt='' />
          </picture>
        </div>

        <div className='p-index-profile__string'>
          <ul className='p-index-profile__list' ref={listRef}>
            {items.list.map((item) => {
              return (
                <li className='p-index-profile__item ts-index-profile-item' key={item.id}>
                  <div className='p-index-profile__item-inside'>
                    <p
                      className='p-index-profile__item-date'
                      dangerouslySetInnerHTML={{
                        __html: item.date,
                      }}
                    />

                    <div className='p-index-profile__item-content'>
                      <p
                        className='p-index-profile__item-title'
                        dangerouslySetInnerHTML={{
                          __html: item.title,
                        }}
                      />
                      <p
                        className='p-index-profile__item-text'
                        dangerouslySetInnerHTML={{
                          __html: item.text,
                        }}
                      />

                      <div className='p-index-profile__stack'>
                        {item.stack?.map((stack, stackIndex) => {
                          return (
                            <div
                              className='p-index-profile__stack-inside'
                              key={stackIndex}
                            >
                              {stack.title && (
                                <p className='p-index-profile__stack-head'>
                                  {stack.title}:
                                </p>
                              )}

                              {stack.items && (
                                <p className='p-index-profile__stack-items'>
                                  {stack.items?.map((item, itemIndex) => {
                                    return (
                                      <span
                                        className='p-index-profile__stack-item'
                                        key={itemIndex}
                                      >
                                        {item}
                                      </span>
                                    );
                                  })}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IndexProfile;
