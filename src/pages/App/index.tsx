import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'core/styles/global-styles';

import Layout from 'core/components/Layout'

// Pages
import LoginScreen from 'pages/LoginScreen';
import CreateAccountScreen from 'pages/CreateAccountScreen';
import VerifyOTPScreen from 'pages/VerifyOTPScreen';

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/create-account" element={<CreateAccountScreen />} />
                <Route path="/verify-otp" element={<VerifyOTPScreen />} />
            </Routes>
            <GlobalStyle />
        </Layout>
    )
}
