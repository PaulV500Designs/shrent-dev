import styled from "styled-components";
import { StyleConstants } from 'core/styles/StyleConstants';

export const HaveAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .required {
    color: ${StyleConstants.color.tones.red};
  }

  .cta {

    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.9;
    }
  }
`;
