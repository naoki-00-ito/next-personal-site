import { MutableRefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useToggleClass = (
  elementRefs:
    | MutableRefObject<HTMLElement | null>
    | MutableRefObject<HTMLElement | null>[],
) => {
  const didEffect = useRef(false);

  useLayoutEffect(() => {
    if (!didEffect.current) {
      didEffect.current = true;

      const refsArray = Array.isArray(elementRefs) ? elementRefs : [elementRefs];

      refsArray.forEach((ref) => {
        if (ref && ref.current) {
          gsap.to(ref.current, {
            scrollTrigger: {
              start: 'top center',
              trigger: ref.current,
              invalidateOnRefresh: true,
              scrub: true,
              toggleClass: {
                targets: ref.current,
                className: 'is-active',
              },
            },
          });
        }
      });
    }
  }, []);
};

export default useToggleClass;
