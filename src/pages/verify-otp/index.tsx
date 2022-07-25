/* eslint-disable @typescript-eslint/no-empty-function */
import dynamic from "next/dynamic";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Card from '@/components/Card';
import ContentHeader from '@/components/ContentHeader';
import Cta from '@/components/Cta';
import CtaContainer from '@/components/Cta/CtaContainer';
import FieldWrapper from '@/components/Elements/FieldWrapper';
import Icon from '@/components/Icon';
import GreenCheck from '@/components/Icon/svg/fi-green-check.svg';
// import OTPCode from '@/components/OTPCode';
import { BodySmall, HeadingTwo, ParagraphBold } from '@/components/Typography';

import * as S from './page.style';

import ShrentLogo from '~/images/shrent-logo-web.png';

const OTPCode = dynamic(
    () => {
        return import("@/components/OTPCode");
    },
    { ssr: false }
);

export default function VerifyOTPScreen() {
    const [isVerified, setVerified] = useState<boolean>(false);

    const VerifiedContent = () => (
        <>
            <Icon src={GreenCheck} size="large" />
            <ContentHeader title="Your account has been verified successfully!" />
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
        </>
    );

    const VerifyOTPComponent = () => (
        <>
            <ContentHeader
                title="Verification"
                subTitle="You will receive a One-Time Password (OTP) on your registered mobile number. "
            />
            <FieldWrapper>
                <ParagraphBold margin="0 0 3px">Verification</ParagraphBold>
                <OTPCode
                    length={6}
                    onChange={() => { }}
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
        </>
    );

    useEffect(() => {
        // window is accessible here.
        console.log("window.innerHeight", window.innerHeight);
    }, []);

    return (
        <S.PageContainer id="verifyOTPScreen">
            <S.LogoContainer className="logo-container">
                {/* // eslint-disable-next-line react/jsx-no-undef */}
                <Image src={ShrentLogo} alt="logo" />
                <HeadingTwo margin="40px 0 0">Why buy it, Shrent it.</HeadingTwo>
            </S.LogoContainer>
            <Card>
                {isVerified ? VerifiedContent() : VerifyOTPComponent()}
            </Card>
        </S.PageContainer>
    )
}