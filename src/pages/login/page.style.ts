import bgSrc from 'assets/images/welcome-screen-web-bg-1.png';
import styled from 'styled-components';

import { StyleConstants } from '@/styles/StyleConstants';

export const PageContainer = styled.section`
  background-image: url(${bgSrc}),
    linear-gradient(180deg, #dab9e6 12.19%, rgba(247, 210, 116, 0) 100%);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  display: flex;
  justify-content: space-between;
  padding: 80px 50px;
  height: 100%;

  .card {
    height: auto;
    width: 480px;
  }

  .cta--google {
    button {
      border: 2px solid rgba(28, 52, 84, 0.26);
      font-weight: 400;
    }
  }
`;

export const LogoContainer = styled.div``;

export const OR = styled.div`
  position: relative;
  margin: 20px 0;

  .typography--caption {
    color: rgba(28, 52, 84, 0.26);
    font-size: 14px;
    font-weight: 400;
    text-align: center;

    &:before {
      content: '';
      background: rgba(28, 52, 84, 0.26);
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      height: 1px;
      width: 40%;
    }

    &:after {
      content: '';
      background: rgba(28, 52, 84, 0.26);
      display: block;
      position: absolute;
      top: 50%;
      right: 0;
      height: 1px;
      width: 40%;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;

  .site-logo {
    display: block;
    margin: 0 auto ${StyleConstants.spacing[32]};
  }
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .cta {
    span {
      color: ${StyleConstants.color.black};
      font-size: 14px;
      font-weight: 400;
      line-height: 1.6;
    }
  }
`;

export const HaveAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .cta {
    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.9;
    }
  }
`;
