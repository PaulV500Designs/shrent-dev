import React, { useState } from 'react';

import Cta from 'core/components/Cta';
import CtaContainer from 'core/components/Cta/CtaContainer';
import Input from 'core/components/Elements/Input';
import FieldWrapper from 'core/components/Elements/FieldWrapper';
import Checkbox from 'core/components/Elements/Checkbox';
import { ParagraphLight, BodySmall } from 'core/components/Typography';

import Icon from 'core/components/Icon';
import EyeCrossed from 'core/components/Icon/svg/fi-rr-eye-crossed.svg';
import EyeIcon from 'core/components/Icon/svg/fi-rr-eye.svg';

import * as S from './page.style';

export default function CreateAccountForm({ onLogin, onSubmit }) {
    const [showPass, setShowPass] = useState<boolean>(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit();
    };

    return (
        <React.Fragment>
            <S.Form onSubmit={handleSubmit}>
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
            </S.Form>
            <CtaContainer direction="column" margin="40px 0 0">
                <Cta
                    ctaStyle="primary"
                    ctaType="button"
                    size="large"
                    onClick={onLogin}
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
                    onClick={onLogin}
                >
                    Log in
                </Cta>
            </S.HaveAccount>
        </React.Fragment>
    );
}