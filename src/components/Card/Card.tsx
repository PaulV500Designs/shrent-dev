import React from 'react';

import * as S from './Card.style';

interface CardProps {
  noPadding?: boolean;
  withShadow?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Card = ({
  className = '',
  noPadding = false,
  withShadow = false,
  children,
}: CardProps) => (
  <S.Card className='card' {...{ withShadow }}>
    <S.Content {...{ noPadding }}>{children}</S.Content>
  </S.Card>
);

export default Card;
