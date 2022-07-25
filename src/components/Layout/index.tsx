import React from 'react';

import * as S from './Layout.style';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <S.Layout>{children}</S.Layout>;
}
