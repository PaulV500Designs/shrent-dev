import styled from 'styled-components/macro';
import { styleConstants } from '@/styles/styleConstants';

const ErrorMsg = styled.span`
  padding: 1px;
  display: block;
  font-size: 12px;
  color: ${styleConstants.color.tones.red};
  white-space: pre-wrap;
`;

export default ErrorMsg;
