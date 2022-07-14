import React, { useState } from 'react';

import Card from 'core/components/Card';
import Cta from 'core/components/Cta';
import CtaContainer from 'core/components/Cta/CtaContainer';
import ContentHeader from 'core/components/ContentHeader';
import { HeadingTwo, ParagraphBold, BodySmall } from 'core/components/Typography';
import OTPCode from 'core/components/OTPCode';
import FieldWrapper from 'core/components/Elements/FieldWrapper';

import Icon from 'core/components/Icon';
import GreenCheck from 'core/components/Icon/svg/fi-green-check.svg';

import ShrentLogo from 'assets/shrent-logo-web.png';
import * as S from './page.style';

export default function VerifyOTPScreen() {
    const [isVerified, setVerified] = useState<boolean>(false);

    const VerifiedContent = () => (
        <React.Fragment>
            <Icon src={GreenCheck} size="large" />
            <ContentHeader title="Your account has been verified successfully!"/>
            <CtaContainer direction="column" margin="40px 0 0">
                <Cta
                    ctaStyle="primary"
                    ctaType="button"
                    size="large"
                    onClick={() => setVerified(false)}
                >
                    Continue
                </Cta>
            </CtaContainer>
        </React.Fragment>
    );

    const VerifyOTPComponent = () => (
        <React.Fragment>
            <ContentHeader
                title="Verification"
                subTitle="You will receive a One-Time Password (OTP) on your registered mobile number. "
            />
            <FieldWrapper>
                <ParagraphBold margin="0 0 3px">Verification</ParagraphBold>
                <OTPCode
                    length={6}
                    onChange={() => {}}
                />
            </FieldWrapper>
            <CtaContainer direction="column" margin="40px 0 0">
                <Cta
                    ctaStyle="primary"
                    ctaType="button"
                    size="large"
                    onClick={() => setVerified(true)}
                >
                    Submit
                </Cta>
            </CtaContainer>
            <S.DidntReceiveCode>
                <BodySmall margin="0 5px 0 0">Did not receive code?</BodySmall>
                <Cta
                    ctaStyle="plain"
                    ctaType="button"
                    isWithoutPadding
                    size="large"
                >
                    Resend Code
                </Cta>
            </S.DidntReceiveCode>
        </React.Fragment>
    );

    return (
        <S.PageContainer id="verifyOTPScreen">
            <S.LogoContainer className="logo-container">
                <img src={ShrentLogo} alt="" />
                <HeadingTwo margin="40px 0 0">Why buy it, Shrent it.</HeadingTwo>
            </S.LogoContainer>
            <Card>
                {isVerified ? VerifiedContent() : VerifyOTPComponent()}
            </Card>
        </S.PageContainer>
    )
}