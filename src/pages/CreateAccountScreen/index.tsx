import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import Card from 'core/components/Card';
import Cta from 'core/components/Cta';
import CtaContainer from 'core/components/Cta/CtaContainer';
import ContentHeader from 'core/components/ContentHeader';
import Checkbox from 'core/components/Elements/Checkbox';
import Input from 'core/components/Elements/Input';
import FieldWrapper from 'core/components/Elements/FieldWrapper';
import { ParagraphLight, BodySmall, HeadingTwo, Caption } from 'core/components/Typography';

import Icon from 'core/components/Icon';
import EyeCrossed from 'core/components/Icon/svg/fi-rr-eye-crossed.svg';
import EyeIcon from 'core/components/Icon/svg/fi-rr-eye.svg';

import ShrentLogo from 'assets/shrent-logo-web.png';
import * as S from './page.style';
import * as LoginStyle from '../LoginScreen/page.style';

export default function CreateAccountScreen() {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState<boolean>(false);
    const ssoCTA = response => {
        console.log('response', response);
    }

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <LoginStyle.PageContainer id="CreateAccountScreen">
            <LoginStyle.LogoContainer className="logo-container">
                <img src={ShrentLogo} alt="" />
                <HeadingTwo margin="40px 0 0">Why buy it, Shrent it.</HeadingTwo>
            </LoginStyle.LogoContainer>
            <Card withShadow>
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
                <LoginStyle.OR>
                    <Caption margin="0">OR</Caption>
                </LoginStyle.OR>
                <LoginStyle.Form onSubmit={onSubmit}>
                    <FieldWrapper>
                        <ParagraphLight margin="0 0 3px">Username</ParagraphLight>
                        <Input
                            fullWidth
                            type="text"
                            errorMsg="Please enter your username"
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <ParagraphLight margin="0 0 3px">Mobile Number</ParagraphLight>
                        <Input
                            fullWidth
                            type="text"
                            errorMsg="Please enter your username"
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <ParagraphLight margin="0 0 3px">Email Address</ParagraphLight>
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
                            type={showPass ? 'text' : 'password'}
                            icon={<Icon src={showPass ? EyeIcon : EyeCrossed} size="small" />}
                            iconPosition="right"
                            iconColor="secondary"
                            onIconClick={() => setShowPass(prev => !prev)}
                            errorMsg="Please enter your password"
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <ParagraphLight margin="0 0 3px">Confirm Password</ParagraphLight>
                        <Input
                            fullWidth
                            type={showPass ? 'text' : 'password'}
                            icon={<Icon src={showPass ? EyeIcon : EyeCrossed} size="small" />}
                            iconPosition="right"
                            iconColor="secondary"
                            onIconClick={() => setShowPass(prev => !prev)}
                            errorMsg="Please enter your password"
                        />
                    </FieldWrapper>
                    <Checkbox
                        text="I agree to Terms and Conditions"
                        value="check2"
                        onChange={() => { }}
                    />
                    <CtaContainer direction="column" margin="40px 0 0">
                        <Cta
                            ctaStyle="primary"
                            ctaType="button"
                            size="large"
                            onClick={() => {}}
                        >
                            Next
                        </Cta>
                    </CtaContainer>
                    <S.HaveAccount>
                        <BodySmall margin="0 5px 0 0">Already have an account?</BodySmall>
                        <Cta
                            ctaStyle="plain"
                            ctaType="button"
                            isWithoutPadding
                            size="large"
                            onClick={() => navigate('/')}
                        >
                            Log in
                        </Cta>
                    </S.HaveAccount>
                </LoginStyle.Form>
            </Card>
        </LoginStyle.PageContainer>
    )
}