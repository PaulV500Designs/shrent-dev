import React from 'react'

import * as S from '@/components/Button/Button.style';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white-outline' | 'unstyled';
  children: React.ReactNode
}

export default function Button({ variant, children }: Props) {
  return (
    <>
      {variant === 'secondary' ? <S.Secondary>{children}</S.Secondary>
        : variant === 'outline' ? <S.DarkOutline>{children}</S.DarkOutline>
          : variant === 'white-outline' ? <S.WhiteOutline>{children}</S.WhiteOutline>
            : variant === 'unstyled' ? <S.Unstyled>{children}</S.Unstyled>
              : <S.Default>{children}</S.Default>
      }
    </>
  )
}