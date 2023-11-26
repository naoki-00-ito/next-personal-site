'use client';

import useToggleClass from '@/hooks/useToggleClass';
import { useRef } from 'react';
import Image from 'next/image';
import { Profile } from '@/types/profile';

const IndexProfile = ({ items }: { items: Profile }) => {
  console.log(typeof items);
  console.log(items.list[1]);

  const imageRef = useRef(null);
  const stringRef = useRef(null);

  useToggleClass(imageRef);

  return (
    <section className='p-index-profile'>
      <h2 className='p-index-profile__title'>Profile</h2>

      <div className='p-index-profile__main'>
        <div className='p-index-profile__image-wrapper'>
          <picture className='p-index-profile__image' ref={imageRef}>
            <Image src='/images/index/profile.jpg' width={300} height={300} alt='' />
          </picture>
        </div>

        <div className='p-index-profile__string' ref={stringRef}>
          <ul className='p-index-profile__list'>
            {items.list.map((item) => {
              return (
                <li className='p-index-profile__item' key={item.id}>
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
