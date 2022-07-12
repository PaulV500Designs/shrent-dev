import styled from "styled-components";
import { StyleConstants } from "core/styles/StyleConstants";
import HeroBannerBG from "assets/welcome-screen-web-bg-1.png";

export const WelcomeScreen = styled.section`
  background-image: url(${HeroBannerBG}),
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
    width: 450px;
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
  margin: 25px 0;

  .typography--caption {
    color: rgba(28, 52, 84, 0.26);
    font-size: 14px;
    font-weight: 400;
    text-align: center;

    &:before {
      content: "";
      background: rgba(28, 52, 84, 0.26);
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      height: 1px;
      width: 40%;
    }

    &:after {
      content: "";
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
