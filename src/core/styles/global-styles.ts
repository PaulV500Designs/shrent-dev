import { createGlobalStyle } from 'styled-components';

import {
  classNameTypography,
  globalTypography,
} from '../components/Typography/Typography.style';

import { classNameCtas } from '../components/Cta/Cta.style';

import { StyleConstants } from './StyleConstants';
import './fontFace.css';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  
  * {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${StyleConstants.body.default};
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px; // set default font size as 16px for our base
    font-weight: 400;
    line-height: 1.4;
    overflow-x: hidden;
    color: ${StyleConstants.body.text};

    /* Font Smoothing */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body.spv3Font {
    font-family: 'Museo Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #spv3 {
    min-height: 100%;
    min-width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p,
  label {
    line-height: 1.5em;
    margin: 0;
    padding: 0;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  .text-green {
    color: ${StyleConstants.color.tones.green} !important;
  }
  .text-red {
    color: ${StyleConstants.color.tones.red} !important;
  }

  .text-bold {
    font-weight: 600 !important;
  }

  /* NOTE: Component-level typography is driven by the styled
    component exports found in 'core/styles/Typography'. */
    ${globalTypography}

  /* Styled for RTE typography
  - (proxy for typography component styles) */
    ${classNameTypography}

  /* Styles for RTE hyperlinks to look like CTAs
	- (proxy for Cta component styles) */
	  ${classNameCtas}
`;
