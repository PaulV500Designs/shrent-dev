import React from 'react';
import { GlobalStyle } from './core/styles/global-styles';

import Cta from './core/components/Cta'
import CtaContainer from './core/components/Cta/CtaContainer'

export default function App() {
    return (
        <main>
            Shrent App
            <CtaContainer margin="0 15px 16px">
                <Cta
                    ctaStyle="primary"
                    ctaType="button"
                    iconAlign="left"
                    size="small"
                    onClick={() => {}}
                >
                    Primary
                </Cta>
                <Cta
                    ctaStyle="secondary"
                    ctaType="button"
                    iconAlign="left"
                    size="small"
                    onClick={() => {}}
                >
                    Secondary
                </Cta>
                <Cta
                    ctaStyle="outline"
                    ctaType="button"
                    iconAlign="left"
                    size="small"
                    onClick={() => {}}
                >
                    outline
                </Cta>
                <Cta
                    ctaStyle="plain"
                    ctaType="button"
                    iconAlign="left"
                    size="small"
                    onClick={() => {}}
                >
                    Plain
                </Cta>
                <Cta
                    ctaType="button"
                    iconAlign="left"
                    size="small"
                    isDisabled
                    onClick={() => {}}
                >
                    Disabled
                </Cta>
            </CtaContainer>
            <GlobalStyle />
        </main>
    )
}
