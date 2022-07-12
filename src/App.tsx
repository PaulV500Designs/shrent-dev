import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'core/styles/global-styles';

import Layout from 'core/components/Layout'

// Pages
import WelcomeScreen1 from 'pages/welcome-screen-1';

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<WelcomeScreen1 />} />
            </Routes>
            <GlobalStyle />
        </Layout>
    )
}
