'use client'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Background = () => {
  const backgroundRef = useRef(null);
  const didEffect = useRef(false);

  useLayoutEffect(() => {
    if (!didEffect.current) {
      gsap.fromTo(
        backgroundRef.current,
        {
          opacity: 0,
          height: 0,
        },
        {
          opacity: 1,
          height: '100%',
          scrollTrigger: {
            trigger: backgroundRef.current,
            start: 'top top',
          },
        }
      );
    }
  }, []);

  return <div className='c-background' ref={backgroundRef}></div>;
};

export default Background;

