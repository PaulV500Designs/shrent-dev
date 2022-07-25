/* eslint-disable @typescript-eslint/no-empty-function */
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Card from '@/components/Card';
import ContentHeader from '@/components/ContentHeader';
import Cta from '@/components/Cta';
import CtaContainer from '@/components/Cta/CtaContainer';
import Checkbox from '@/components/Elements/Checkbox';
import FieldWrapper from '@/components/Elements/FieldWrapper';
import Input from '@/components/Elements/Input';
import Icon from '@/components/Icon';
import EyeIcon from '@/components/Icon/svg/fi-eye.svg';
import EyeCrossed from '@/components/Icon/svg/fi-eye-crossed.svg';
import { BodySmall, Caption, HeadingTwo, ParagraphLight } from '@/components/Typography';

import * as LoginStyle from '@/pages/login/page.style';

import * as S from './page.style';

import ShrentLogo from '~/images/shrent-logo-web.png';

export default function CreateAccountScreen() {
    const router = useRouter();
    const [showPass, setShowPass] = useState<boolean>(false);
    const ssoCTA = (response: any) => {
        console.log('response', response);
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <LoginStyle.PageContainer id="CreateAccountScreen">
            <LoginStyle.LogoContainer className="logo-container">
                <Image src={ShrentLogo} alt="logo" />
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
                            onClick={() => { }}
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
                            onClick={() => router.push('/login', undefined, { shallow: true })}
                        >
                            Log in
                        </Cta>
                    </S.HaveAccount>
                </LoginStyle.Form>
            </Card>
        </LoginStyle.PageContainer>
    )
}