import { css } from 'styled-components';

const TitilliumWebRegularTtf = '~/fonts/TitilliumWeb-Regular.ttf';
const TitilliumWebBoldTtf = '~/fonts/TitilliumWeb-Bold.ttf';
const TitilliumWebSemiBoldTtf = '~/fonts/TitilliumWeb-SemiBold.ttf';
const TitilliumWebLightTtf = '~/fonts/TitilliumWeb-Light.ttf.ttf';

const FontFamilies = css`
  @font-face {
    font-family: 'Titillium Web';
    src: url(${TitilliumWebBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Titillium Web';
    src: url(${TitilliumWebRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Titillium Web';
    src: url(${TitilliumWebSemiBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Titillium Web';
    src: url(${TitilliumWebLightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
`;

export default FontFamilies;
