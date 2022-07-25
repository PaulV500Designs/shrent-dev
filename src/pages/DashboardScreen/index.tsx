import React, { useState } from 'react';

import Card from 'core/components/Card';
import Cta from 'core/components/Cta';
import CtaContainer from 'core/components/Cta/CtaContainer';
import ContentHeader from 'core/components/ContentHeader';
import Checkbox from 'core/components/Elements/Checkbox';
import Input from 'core/components/Elements/Input';
import FieldWrapper from 'core/components/Elements/FieldWrapper';
import { HeadingTwo, Caption } from 'core/components/Typography';

import Icon from 'core/components/Icon';
import LocationArrow from 'core/components/Icon/svg/fi-location-arrow.svg';
import Pill1 from 'core/components/Icon/svg/dashboard-pill-1.svg';
import Pill2 from 'core/components/Icon/svg/dashboard-pill-2.svg';
import Pill3 from 'core/components/Icon/svg/dashboard-pill-3.svg';
import Pill4 from 'core/components/Icon/svg/dashboard-pill-4.svg';
import Pill5 from 'core/components/Icon/svg/dashboard-pill-5.svg';
import Pill6 from 'core/components/Icon/svg/dashboard-pill-6.svg';

import * as S from './page.style';
export default function DashboardScreen() {

    return (
        <S.PageContainer id="DashboardScreen">
            <HeadingTwo margin="0" color="default">Shrent an item today</HeadingTwo>
            <S.FilterContainer>
                <Input 
                    fullWidth borderBottomOnly 
                    placeholder="What are you looking for?" 
                />
                <Input
                    borderBottomOnly
                    icon={<Icon src={LocationArrow} size="small" />}
                    iconPosition="left"
                    fullWidth placeholder="Current Location?" 
                />
                <Cta
                    ctaStyle="outline"
                    ctaType="button"
                    isWithoutPadding
                    size="large"
                >
                    Filters
                </Cta>
            </S.FilterContainer>
            <S.Categories>
                <S.CategoryItem>
                    <Icon src={Pill1} size="xlarge" />
                    <Caption color="subdued">Tools</Caption>
                </S.CategoryItem>
                <S.CategoryItem>
                    <Icon src={Pill2} size="xlarge" />
                    <Caption color="subdued">Lawn &amp; Garden</Caption>
                </S.CategoryItem>
                <S.CategoryItem>
                    <Icon src={Pill3} size="xlarge" />
                    <Caption color="subdued">Sporting Goods</Caption>
                </S.CategoryItem>
                <S.CategoryItem>
                    <Icon src={Pill4} size="xlarge" />
                    <Caption color="subdued">Event Supplies</Caption>
                </S.CategoryItem>
                <S.CategoryItem>
                    <Icon src={Pill5} size="xlarge" />
                    <Caption color="subdued">Outdoor Gear</Caption>
                </S.CategoryItem>
                <S.CategoryItem>
                    <Icon src={Pill6} size="xlarge" />
                    <Caption color="subdued">Vacation Gear</Caption>
                </S.CategoryItem>
            </S.Categories>
        </S.PageContainer>
    )
}