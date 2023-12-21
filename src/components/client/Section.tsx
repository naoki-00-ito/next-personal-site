'use client';

import { ReactNode } from 'react';
import { useRef } from 'react';
import useToggleClass from '@/hooks/useToggleClass';

type Props = {
  children: ReactNode;
  background?: boolean;
  endTriggerEl?: null | string;
};

const Section = ({ children, background = false }: Props) => {
  const sectionRef = useRef(null);

  useToggleClass({ elementRef: sectionRef, elementsClassName: null, once: false });

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
