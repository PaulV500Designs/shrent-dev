import { StyleConstants } from 'core/styles/StyleConstants';
import styled from 'styled-components';

export const ContentHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  .typography--headingFour {
    line-height: 22px;
  }

  .typography--subHeading {
    color: ${StyleConstants.color.gray};
  }
`;