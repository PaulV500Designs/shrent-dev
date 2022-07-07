/**
 * TODO: Update the props and styling
 * make it more flexible for orientation
 */
import React from 'react';

import * as S from './Cta.style';

interface CtaContainerTypes extends React.HTMLAttributes<HTMLElement> {
  /** This will be the children of components */
  children: React.ReactNode;
  /** Orientation of the CTA's in the container row or column */
  direction?: string;
  /** Margin of the CTA container default none/0 */
  margin?: string;
}

const CtaContainer = ({ children, direction, margin }: CtaContainerTypes) => {
  return (
    <S.CtaContainer
      direction={direction}
      margin={margin}
      className="cta-container"
    >
      {children}
    </S.CtaContainer>
  );
};

export default CtaContainer;
