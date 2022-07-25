/**Icom
 * @prop {string} size       'xsmall' | 'small' | 'medium' | 'large'
 * @prop {string} margin     
 
  Sample
    import IconName from 'app/components/Icon/svg/fi-rr-add.svg';
   <Icon src={IconName} size="xsmall" margin="10px"/>
 */

import styled from 'styled-components/macro';
import { css } from 'styled-components/macro';

type IconProps = {
  size: 'xsmall' | 'small' | 'medium' | 'large';
  margin?: string;
};

const xsmall = css`
  height: 16px;
  width: 16px;
`;

const small = css`
  height: 24px;
  width: 24px;
`;

const medium = css`
  height: 48px;
  width: 48px;
`;

const large = css`
  height: 60px;
  width: 60px;
`;

const Icon = styled.img<IconProps>`
  ${p => p.size === 'xsmall' && xsmall};
  ${p => p.size === 'small' && small};
  ${p => p.size === 'medium' && medium};
  ${p => p.size === 'large' && large};
  margin: ${p => (p.margin ? p.margin : undefined)};
  cursor: inherit;

  /* &:hover {
    opacity: 0.7;
  } */
`;

export default Icon;
