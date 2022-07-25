/* eslint-disable @typescript-eslint/no-empty-function */
import dynamic from 'next/dynamic';
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
import * as S from './page.style';

const shrentLogoUrl = '/images/shrent-logo-web.png';

const OTPCode = dynamic(
  () => {
    return import('@/components/OTPCode');
  },
  { ssr: false }
);

export default function VerifyOTPScreen() {
  const [isVerified, setVerified] = useState<boolean>(false);

  const VerifiedContent = () => (
    <>
      <Icon src={GreenCheck} size='large' />
      <ContentHeader title='Your account has been verified successfully!' />
      <CtaContainer direction='column' margin='40px 0 0'>
        <Cta
          ctaStyle='primary'
          ctaType='button'
          size='large'
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
        title='Verification'
        subTitle='You will receive a One-Time Password (OTP) on your registered mobile number. '
      />
      <FieldWrapper>
        <p>Verification</p>
        <OTPCode length={6} onChange={() => { }} />
      </FieldWrapper>
      <CtaContainer direction='column' margin='40px 0 0'>
        <Cta
          ctaStyle='primary'
          ctaType='button'
          size='large'
          onClick={() => setVerified(true)}
        >
          Submit
        </Cta>
      </CtaContainer>
      <S.DidntReceiveCode>
        <small>Did not receive code?</small>
        <Cta ctaStyle='plain' ctaType='button' isWithoutPadding size='large'>
          Resend Code
        </Cta>
      </S.DidntReceiveCode>
    </>
  );

  useEffect(() => {
    // window is accessible here.
    console.log('window.innerHeight', window.innerHeight);
  }, []);

  return (
    <S.PageContainer id='verifyOTPScreen'>
      <S.LogoContainer className='logo-container'>
        {/* // eslint-disable-next-line react/jsx-no-undef */}
        <Image src={shrentLogoUrl} alt='logo' layout='fill' />
        <h2>Why buy it, Shrent it.</h2>
      </S.LogoContainer>
      <Card>{isVerified ? VerifiedContent() : VerifyOTPComponent()}</Card>
    </S.PageContainer>
  );
}
