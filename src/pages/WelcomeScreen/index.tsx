import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

import Card from 'core/components/Card';
import Cta from 'core/components/Cta';
import CtaContainer from 'core/components/Cta/CtaContainer';
import ContentHeader from 'core/components/ContentHeader';
import { HeadingTwo, Caption } from 'core/components/Typography';

import LoginForm from './LoginForm';
import CreateAccountForm from './CreateAccountForm';

import ShrentLogo from 'assets/shrent-logo-web.png';
import * as S from './page.style';

export default function WelcomeScreen() {
    const [isLoginForm, setLoginForm] = useState<boolean>(true);

    const ssoCTA = response => {
        console.log('response', response);
    }

    console.log('isLoginForm', isLoginForm);

    return (
        <S.WelcomeScreen id="welcomeScreen">
            <S.LogoContainer className="logo-container">
                <img src={ShrentLogo} alt="" />
                <HeadingTwo margin="40px 0 0">Why buy it, Shrent it.</HeadingTwo>
            </S.LogoContainer>
            <Card id="welcomeScreenCard" withShadow>
                <ContentHeader
                    title="Log in to your account"
                    subTitle="Welcome back, please enter your details."
                />
                <CtaContainer direction="column">
                    <Cta
                        className="cta--google"
                        ctaStyle="outline"
                        ctaType="button"
                        size="large"
                        onClick={() => { }}
                    >
                        Continue with Google
                    </Cta>
                    {/* <GoogleLogin
                        className="cta cta-outline"
                        clientId="38744847901-nqp81mfdsoroqppam0bceqs9ikmgfhsi.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={ssoCTA}
                        onFailure={ssoCTA}
                        cookiePolicy={'single_host_origin'}
                        disabled={false}
                    /> */}
                </CtaContainer>
                <S.OR>
                    <Caption margin="0">OR</Caption>
                </S.OR>
                {isLoginForm ? (
                    <LoginForm 
                        onSignUp={() => setLoginForm(false)} 
                        onSubmit={() => {}} 
                    />
                ) : (
                    <CreateAccountForm 
                        onLogin={() => setLoginForm(true)} 
                        onSubmit={() => {}} 
                    />
                )}
            </Card>
        </S.WelcomeScreen>
    )
}
