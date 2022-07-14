import styled from "styled-components";
// import { StyleConstants } from "core/styles/StyleConstants";
import HeroBannerBG from "assets/welcome-screen-web-bg-1.png";

export const PageContainer = styled.section`
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
    width: 480px;

    & > div {
      text-align: center;
    }
  }

  .typography--paragraphBold {
    text-align: left;
  }
`;

export const LogoContainer = styled.div``;

export const DidntReceiveCode = styled.div`
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
