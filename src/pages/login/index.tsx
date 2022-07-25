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
import Layout from '@/components/Layout';


const EyeIconUrl = '/svgs/icons/fi-eye.svg';
const EyeCrossedUrl = '/svgs/icons/fi-eye-crossed.svg';

import * as S from './page.style';

const shrentLogoUrl = '/images/shrent-logo-web.png';

export default function LoginScreen() {
  const router = useRouter();
  const [showPass, setShowPass] = useState<boolean>(false);
  // const ssoCTA = (response: any) => {
  //   console.log('response', response);
  // };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <S.PageContainer id='welcomeScreen'>
        <S.LogoContainer className='logo-container'>
          <Image src={shrentLogoUrl} alt='logo' width={100} height={100} />
          <h2>Why buy it, Shrent it.</h2>
        </S.LogoContainer>
        <Card id='welcomeScreenCard' withShadow>
          <ContentHeader
            title='Log in to your account'
            subTitle='Welcome back, please enter your details.'
          />
          <CtaContainer direction='column'>
            <Cta
              className='cta--google'
              ctaStyle='outline'
              ctaType='button'
              size='large'
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
            <caption>OR</caption>
          </S.OR>
          <S.Form onSubmit={onSubmit}>
            <FieldWrapper>
              <span>Username</span>
              <Input
                fullWidth
                type='text'
                errorMsg='Please enter your username'
              />
            </FieldWrapper>
            <FieldWrapper>
              <span>Password</span>
              <Input
                fullWidth
                type={showPass ? 'text' : 'password'}
                icon={
                  <Icon src={showPass ? EyeIconUrl : EyeCrossedUrl} size='small' />
                }
                iconPosition='right'
                iconColor='secondary'
                onIconClick={() => setShowPass((prev) => !prev)}
                errorMsg='Please enter your password'
              />
            </FieldWrapper>
            <S.RememberMe>
              <Checkbox text='Remember me' value='check2' onChange={() => { }} />
              <Cta
                ctaStyle='plain'
                ctaType='button'
                isWithoutPadding
                size='large'
                onClick={() => { }}
              >
                Forgot Password?
              </Cta>
            </S.RememberMe>
            <CtaContainer direction='column' margin='40px 0 0'>
              <Cta
                ctaStyle='primary'
                ctaType='button'
                size='large'
                onClick={() => { }}
              >
                Log in
              </Cta>
            </CtaContainer>
            <S.HaveAccount>
              <small>Don’t have an account?</small>
              <Cta
                ctaStyle='plain'
                ctaType='button'
                isWithoutPadding
                size='large'
                onClick={() =>
                  router.push('/create-account', undefined, { shallow: true })
                }
              >
                Sign up
              </Cta>
            </S.HaveAccount>
          </S.Form>
        </Card>
      </S.PageContainer>
    </Layout>
  );
}
