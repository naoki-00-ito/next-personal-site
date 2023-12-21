'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const IndexHero = () => {
  const heroRef = useRef(null);
  const didEffect = useRef(false);

  const heroMaskRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroIconRef = useRef(null);
  const didEffectFadein = useRef(false);

  useLayoutEffect(() => {
    if (!didEffect.current) {
      didEffect.current = true;

      const hero = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=900',
          scrub: true,
          pin: true,
        },
      });

      hero.fromTo(
        '.ts-hero-lead',
        {
          opacity: 0,
          scale: 0.2,
        },
        { opacity: 1, scale: 1, ease: 'Power4.out' },
      );
    }

    if (!didEffectFadein.current) {
      didEffectFadein.current = true;

      const tl = gsap.timeline();

      tl.fromTo(
        heroMaskRef.current,
        {
          opacity: 0,
          height: 0,
        },
        {
          opacity: 1,
          height: '100%',
        },
      )
        .fromTo(
          heroTitleRef.current,
          {
            opacity: 0,
            y: '-30',
          },
          {
            opacity: 1,
            y: '0',
            ease: 'expo.out',
          },
        )
        .fromTo(
          heroIconRef.current,
          {
            opacity: 0,
            y: '-30',
            delay: 30,
          },
          {
            opacity: 1,
            y: '0',
            ease: 'expo.out',
          },
        );
    }
  }, []);

  return (
    <section className='p-index-hero' ref={heroRef}>
      <div className='p-index-hero__mask' ref={heroMaskRef}></div>

      <h1 className='p-index-hero__title' ref={heroTitleRef}>
        Naoki&apos;s Site
      </h1>
      <p className='p-index-hero__lead ts-hero-lead'>Thanks for visiting this site!</p>

      <div className='p-index-hero__icon' ref={heroIconRef}></div>
    </section>
  );
};

export default IndexHero;
