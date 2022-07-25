import styled from 'styled-components';

import { styleConstants } from '@/styles/styleConstants';

export const ContentHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  .typography--headingFour {
    line-height: 22px;
  }

  .typography--subHeading {
    color: ${styleConstants.color.gray};
  }
`;
