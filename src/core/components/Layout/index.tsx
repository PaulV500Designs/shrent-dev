import React from 'react';
import * as S from './Layout.style';

export default function Layout({
    children
}) {
    return (
        <S.Layout>
            {children}
        </S.Layout>
    )
}
