import { createGlobalStyle } from 'styled-components';

import FontFamilies from '@/styles/fontFamilies';
import PreFlight from '@/styles/preFlight';
import Typography from '@/styles/typography';

const GlobalStyle = createGlobalStyle`
  ${PreFlight}
  ${FontFamilies}
  ${Typography}

  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default GlobalStyle;
