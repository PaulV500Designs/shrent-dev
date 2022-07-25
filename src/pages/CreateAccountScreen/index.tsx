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
import PhoneNumberInput from 'core/components/Elements/PhoneNumberInput';
import { ParagraphLight, BodySmall, HeadingTwo, Caption } from 'core/components/Typography';

import Icon from 'core/components/Icon';
import EyeCrossed from 'core/components/Icon/svg/fi-eye-crossed.svg';
import EyeIcon from 'core/components/Icon/svg/fi-eye.svg';

import ShrentLogo from 'assets/shrent-logo-web.png';
import * as S from './page.style';
import * as LoginStyle from '../LoginScreen/page.style';

const URL = 'https://shrent.500designs.com/api/auth/register';

const initialFormData = {
    name: '',
    mobile_number: '',
    email_address: '',
    password: '',
    confirmPassword: '',
};

export default function CreateAccountScreen() {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState<boolean>(false);
    const [formData, setFormData] = useState<any>(initialFormData);

    const onSubmit = (e) => {
        e.preventDefault();

        console.log('formData', formData);
        sendData(formData);
    };

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const sendData = async (data) => {
        const fData: any = new FormData();

        for (const [key, value] of Object.entries(data)) {
            fData.append(key, value);
        }

        const response = await fetch(URL, {
            method: 'POST',
            body: fData,
        });

        console.log('response', response);
    };

    return (
        <LoginStyle.PageContainer id="CreateAccountScreen">
            <LoginStyle.LogoContainer className="logo-container">
                <img src={ShrentLogo} alt="" />
                <HeadingTwo margin="40px 0 0" color="default">Why buy it, Shrent it.</HeadingTwo>
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
                    <Caption tag="div" margin="0">OR</Caption>
                </LoginStyle.OR>
                <LoginStyle.Form onSubmit={onSubmit}>
                    <FieldWrapper>
                        <ParagraphLight margin="0 0 3px">Username <span className="text-red">*</span></ParagraphLight>
                        <Input
                            fullWidth
                            type="text"
                            errorMsg="Please enter your username"
                            name="name"
                            value={formData.name}
                            onChange={handleFormData}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <ParagraphLight margin="0 0 3px">Mobile Number <span className="text-red">*</span></ParagraphLight>
                        <Input
                            isPhoneNumber
                            fullWidth
                            type="text"
                            errorMsg="Please enter your Mobile Number"
                            name="mobile_number"
                            value={formData.mobile_number}
                            onChange={(val: string) => setFormData({ ...formData, mobile_number: val})}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <ParagraphLight margin="0 0 3px">Email Address <span className="text-red">*</span></ParagraphLight>
                        <Input
                            fullWidth
                            type="text"
                            errorMsg="Please enter your Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleFormData}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <ParagraphLight margin="0 0 3px">Password <span className="text-red">*</span></ParagraphLight>
                        <Input
                            fullWidth
                            type={showPass ? 'text' : 'password'}
                            icon={<Icon src={showPass ? EyeIcon : EyeCrossed} size="small" />}
                            iconPosition="right"
                            iconColor="secondary"
                            onIconClick={() => setShowPass(prev => !prev)}
                            name="password"
                            value={formData.password}
                            onChange={handleFormData}
                            errorMsg="Please enter your password"
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <ParagraphLight margin="0 0 3px">Confirm Password <span className="text-red">*</span></ParagraphLight>
                        <Input
                            fullWidth
                            type={showPass ? 'text' : 'password'}
                            icon={<Icon src={showPass ? EyeIcon : EyeCrossed} size="small" />}
                            iconPosition="right"
                            iconColor="secondary"
                            onIconClick={() => setShowPass(prev => !prev)}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleFormData}
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