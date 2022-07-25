import { css } from 'styled-components';

export const keyboardOnly = (styles: any) => css`
  [data-whatinput='keyboard'] & {
    ${styles}
  }
`;

export const mimicFocus = css`
  ${keyboardOnly`
		outline: 5px auto Highlight;

		/* WebKit gets its native focus styles. */
		@media (-webkit-min-device-pixel-ratio: 0) {
			outline-color: -webkit-focus-ring-color;
			outline-style: auto;
		}
	`}
`;

export const buttonReset = css`
  appearance: none;
  border: none;
  background-color: transparent;
  padding: 0;
`;
