import { MutableRefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Args = {
  elementRef: MutableRefObject<HTMLElement | null> | null;
  elementsClassName: string | null;
  once: boolean;
};

const useToggleClass = ({
  elementRef, // 要素指定 単一の場合 ref指定
  elementsClassName, // 要素指定  複数の場合 class名指定
  once, // アニメーションを一度だけ実行させるかの指定
}: Args) => {
  const didEffect = useRef(false);
  const classActive = 'is-active';

  useLayoutEffect(() => {
    if (!didEffect.current) {
      didEffect.current = true;

      if (elementRef && elementRef.current) {
        gsap.to(elementRef.current, {
          scrollTrigger: {
            start: 'top center',
            trigger: elementRef.current,
            invalidateOnRefresh: true,
            scrub: true,
            once: once,
            toggleClass: {
              targets: elementRef.current,
              className: classActive,
            },
          },
        });
      } else if (elementsClassName) {
        const targets = gsap.utils.toArray(elementsClassName);

        targets.forEach((target) => {
          const newTarget = target as string;

          gsap.to(newTarget, {
            scrollTrigger: {
              start: 'top center',
              trigger: newTarget,
              invalidateOnRefresh: true,
              scrub: true,
              once: once,
              toggleClass: {
                targets: newTarget,
                className: classActive,
              },
            },
          });
        });
      }
    }
  }, []);
};

export default useToggleClass;
