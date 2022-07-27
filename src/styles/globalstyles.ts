import { createGlobalStyle } from 'styled-components';

import FontFamilies from '@/styles/fontFamilies';
import Typography from '@/styles/typography';

const AppStyles = createGlobalStyle`
  ${FontFamilies}
  ${Typography}

  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default AppStyles;
