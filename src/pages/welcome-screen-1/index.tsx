import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

import Card from 'core/components/Card';
import Cta from 'core/components/Cta';
import CtaContainer from 'core/components/Cta/CtaContainer';
import ContentHeader from 'core/components/ContentHeader';
import Input from 'core/components/Elements/Input';
import FieldWrapper from 'core/components/Elements/FieldWrapper';
import { ParagraphLight, HeadingTwo, Caption, Body } from 'core/components/Typography';

import ShrentLogo from 'assets/shrent-logo-web.png';
import * as S from './page.style';

export default function WelcomeScreen() {
    const ssoCTA = response => {
        console.log('response', response);
    }
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
                    <GoogleLogin
                        clientId="38744847901-nqp81mfdsoroqppam0bceqs9ikmgfhsi.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={ssoCTA}
                        onFailure={ssoCTA}
                        cookiePolicy={'single_host_origin'}
                        disabled={false}
                    // render={renderProps => (
                    //         <Cta
                    //             className="cta--google"
                    //             ctaStyle="outline"
                    //             ctaType="button"
                    //             size="large"
                    //             onClick={renderProps.onClick}
                    //         >
                    //             Continue with Google
                    //         </Cta>
                    //     )}
                    />
                </CtaContainer>
                
                {/* <GoogleLogin ></GoogleLogin> */}
                <S.OR>
                    <Caption margin="0">OR</Caption>
                </S.OR>
                <S.Form>
                    <FieldWrapper>
                        <ParagraphLight margin="0 0 3px">Username</ParagraphLight>
                        <Input
                            fullWidth
                            type="text"
                            errorMsg="Please enter your username"
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <ParagraphLight margin="0 0 3px">Password</ParagraphLight>
                        <Input
                            fullWidth
                            type={'password'}
                            iconPosition="right"
                            iconColor="secondary"
                            errorMsg="Please enter your password"
                        />
                    </FieldWrapper>
                </S.Form>
                <CtaContainer direction="column">
                    <Cta
                        ctaStyle="primary"
                        ctaType="button"
                        size="large"
                        onClick={() => { }}
                    >
                        Log in
                    </Cta>
                </CtaContainer>
            </Card>
        </S.WelcomeScreen>
    )
}
