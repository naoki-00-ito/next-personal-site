'use client';

import { ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  background?: boolean;
  endTriggerEl?: null | string;
};

const Section = ({ children, background = false }: Props) => {
  const sectionRef = useRef(null);
  const didEffect = useRef(false);

  useLayoutEffect(() => {
    if (!didEffect.current && background === true) {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          invalidateOnRefresh: true,
          scrub: true,
          toggleClass: {
            targets: sectionRef.current,
            className: 'is-active',
          },
        },
      });
    }
  });

  return (
    <section
      className={`l-section ${background === true && 'l-section--background'}`}
      ref={sectionRef}
    >
      {children}
    </section>
  );
};

export default Section;
