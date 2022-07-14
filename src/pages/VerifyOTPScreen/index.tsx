import React from 'react';

import Card from 'core/components/Card';
import Cta from 'core/components/Cta';
import CtaContainer from 'core/components/Cta/CtaContainer';
import ContentHeader from 'core/components/ContentHeader';
import { HeadingTwo, ParagraphBold, BodySmall } from 'core/components/Typography';
import OTPCode from 'core/components/OTPCode';
import FieldWrapper from 'core/components/Elements/FieldWrapper';

import ShrentLogo from 'assets/shrent-logo-web.png';
import * as S from './page.style';

export default function VerifyOTPScreen() {
    return (
        <S.PageContainer id="welcomeScreen">
            <S.LogoContainer className="logo-container">
                <img src={ShrentLogo} alt="" />
                <HeadingTwo margin="40px 0 0">Why buy it, Shrent it.</HeadingTwo>
            </S.LogoContainer>
            
            <Card className="card-otp">
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
            </Card>
        </S.PageContainer>
    )
}