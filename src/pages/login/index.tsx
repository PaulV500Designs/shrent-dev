/* eslint-disable @typescript-eslint/no-empty-function */
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import 'twin.macro';

import Card from '@/components/Card';
import Cta from '@/components/Cta';
import Checkbox from '@/components/Elements/Checkbox';
import FieldWrapper from '@/components/Elements/FieldWrapper';
import Input from '@/components/Elements/Input';
import Icon from '@/components/Icon';
import Layout from '@/components/Layout';

import GoogleLogo from '~/svgs/google-logo.svg';

const EyeIconUrl = '/svgs/icons/fi-eye.svg';
const EyeCrossedUrl = '/svgs/icons/fi-eye-crossed.svg';
import 'twin.macro';

import Button from '@/components/Button';

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
      <S.Page>
        <div className='logo-container'>
          <Image src={shrentLogoUrl} alt='logo' width={120} height={120} />
          <h2>Why buy it, Shrent it.</h2>
        </div>
        <Card withShadow>
          <header>
            <h3>Login to your account</h3>
            <p>Welcome back, please enter your details.</p>
          </header>
          <Button variant='outline' thin>
            <GoogleLogo />
            Continue with Google
          </Button>
          <span>OR</span>

          {/* <GoogleLogin
                  className="cta cta-outline"
                  clientId="38744847901-nqp81mfdsoroqppam0bceqs9ikmgfhsi.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={ssoCTA}
                  onFailure={ssoCTA}
                  cookiePolicy={'single_host_origin'}
                  disabled={false}
              /> */}

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
            <div tw='flex flex-row justify-between'>
              <Checkbox text='Remember me' value='check2' onChange={() => { }} />
              <Button variant="unstyled" onClick={() => { }} > Forgot Password? </Button>
            </div>
            <Button>
              Log in
            </Button>

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
      </S.Page>
    </Layout>
  );
}
