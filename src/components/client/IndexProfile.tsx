'use client';

import useToggleClass from '@/hooks/useToggleClass';
import { MutableRefObject, useRef } from 'react';
import Image from 'next/image';
import { Profile } from '@/types/profile';

const IndexProfile = ({ items }: { items: Profile }) => {
  const imageRef = useRef(null);

  const itemRefs: MutableRefObject<HTMLElement | null>[] = items.list.map(() =>
    useRef(null),
  );

  useToggleClass(imageRef);
  useToggleClass(itemRefs);

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
          <ul className='p-index-profile__list'>
            {items.list.map((item, i) => {
              return (
                <li className='p-index-profile__item' key={item.id} ref={itemRefs[i]}>
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
