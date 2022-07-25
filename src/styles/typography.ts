import { css } from 'styled-components';
import tw from 'twin.macro';

const Typography = css`
  html,
  body {
    ${tw`font-primary`};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  main {
    h1,
    h2,
    h4 {
      ${tw`font-heading`};
    }
  }
`;

export default Typography;
