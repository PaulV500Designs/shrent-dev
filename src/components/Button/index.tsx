import React from 'react'

import * as S from '@/components/Button/Button.style';

export interface ButtonMods {
  thin?: boolean;
  small?: boolean;
}
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonMods {
  variant?: 'primary' | 'secondary' | 'outline' | 'white-outline' | 'unstyled';
  children: React.ReactNode;
}

export default function Button({ thin, small, variant, children }: Props) {
  const mods = { thin, small };
  return (
    <>
      {
        variant === 'secondary' ? <S.Secondary {...mods}>{children}</S.Secondary>
          : variant === 'outline' ? <S.DarkOutline {...mods}>{children}</S.DarkOutline>
            : variant === 'white-outline' ? <S.WhiteOutline {...mods}>{children}</S.WhiteOutline>
              : variant === 'unstyled' ? <S.Unstyled {...mods}>{children}</S.Unstyled>
                : <S.Default {...mods}>{children}</S.Default>
      }
    </>
  )
}