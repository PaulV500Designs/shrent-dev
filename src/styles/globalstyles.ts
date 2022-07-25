import { createGlobalStyle } from 'styled-components';

import FontFamilies from '@/styles/fontFamilies';
import Typography from '@/styles/typography';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
  }

  * {
    box-sizing: border-box;
  }

  ${FontFamilies}
  ${Typography}
`;

export default GlobalStyle;
