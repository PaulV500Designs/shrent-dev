/* eslint-disable @typescript-eslint/no-empty-function */
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Cta from '@/components/Cta';
import CtaContainer from '@/components/Cta/CtaContainer';
import Checkbox from '@/components/Elements/Checkbox';
import FieldWrapper from '@/components/Elements/FieldWrapper';
import Input from '@/components/Elements/Input';
import Icon from '@/components/Icon';

import * as LoginStyle from '@/pages/login/page.style';

import * as S from './page.style';


const EyeIconUrl = '/svgs/icons/fi-eye.svg';
const EyeCrossedUrl = '/svgs/icons/fi-eye-crossed.svg';

const shrentLogoUrl = '/images/shrent-logo-web.png';

export default function CreateAccountScreen() {
  const router = useRouter();
  const [showPass, setShowPass] = useState<boolean>(false);
  const ssoCTA = (response: any) => {
    console.log('response', response);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <LoginStyle.Page id='CreateAccountScreen'>
      <div className='logo-container'>
        <Image src={shrentLogoUrl} alt='logo' width={120} height={120} />
        <h2>Why buy it, Shrent it.</h2>
      </div>
      <Card withShadow>
        <h3>Login to your account</h3>
        <h4>Welcome back, please enter your details.</h4>
        <Button>
          Continue with Google
        </Button>
        <CtaContainer direction='column'>

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
        <LoginStyle.OtpRecovery>
          <caption>OR</caption>
        </LoginStyle.OtpRecovery>
        <LoginStyle.Form onSubmit={onSubmit}>
          <FieldWrapper>
            <p>Username</p>
            <Input
              fullWidth
              type='text'
              errorMsg='Please enter your username'
            />
          </FieldWrapper>
          <FieldWrapper>
            <p>Mobile Number</p>
            <Input
              fullWidth
              type='text'
              errorMsg='Please enter your username'
            />
          </FieldWrapper>
          <FieldWrapper>
            <p>Email Address</p>
            <Input
              fullWidth
              type='text'
              errorMsg='Please enter your username'
            />
          </FieldWrapper>
          <FieldWrapper>
            <p>Password</p>
            <Input
              fullWidth
              type={showPass ? 'text' : 'password'}
              icon={<Icon src={showPass ? EyeIconUrl : EyeCrossedUrl} size='small' />}
              iconPosition='right'
              iconColor='secondary'
              onIconClick={() => setShowPass((prev) => !prev)}
              errorMsg='Please enter your password'
            />
          </FieldWrapper>
          <FieldWrapper>
            <p>Confirm Password</p>
            <Input
              fullWidth
              type={showPass ? 'text' : 'password'}
              icon={<Icon src={showPass ? EyeIconUrl : EyeCrossedUrl} size='small' />}
              iconPosition='right'
              iconColor='secondary'
              onIconClick={() => setShowPass((prev) => !prev)}
              errorMsg='Please enter your password'
            />
          </FieldWrapper>
          <Checkbox
            text='I agree to Terms and Conditions'
            value='check2'
            onChange={() => { }}
          />
          <CtaContainer direction='column' margin='40px 0 0'>
            <Cta
              ctaStyle='primary'
              ctaType='button'
              size='large'
              onClick={() => { }}
            >
              Next
            </Cta>
          </CtaContainer>
          <S.HaveAccount>
            <small>Already have an account?</small>
            <Cta
              ctaStyle='plain'
              ctaType='button'
              isWithoutPadding
              size='large'
              onClick={() =>
                router.push('/login', undefined, { shallow: true })
              }
            >
              Log in
            </Cta>
          </S.HaveAccount>
        </LoginStyle.Form>
      </Card>
    </LoginStyle.Page>
  );
}
