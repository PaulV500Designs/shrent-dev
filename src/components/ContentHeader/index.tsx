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
      <h4>{title}</h4>
      {subTitle && <h3>{subTitle}</h3>}
    </S.ContentHeader>
  );
}
