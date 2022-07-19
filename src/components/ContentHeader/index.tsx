import { HeadingFour, SubHeading } from '@/components/Typography';
import React from 'react';

import * as S from './ContentHeader.style';

export default function ContentHeader({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return (
    <S.ContentHeader>
      <HeadingFour tag="h4" margin="0 0 10px">
        {title}
      </HeadingFour>
      {subTitle && (
        <SubHeading as="h3" margin="0">
          {subTitle}
        </SubHeading>
      )}
    </S.ContentHeader>
  );
}
