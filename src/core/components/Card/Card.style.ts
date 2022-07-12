import styled, { css } from 'styled-components';

export const Card = styled.div<{
	withShadow?: boolean;
	hover?: boolean;
	noBorder?: boolean;
	allowOverflow?: boolean;
}>`
	background-color: #fff;
	text-align: left;
	border-radius: 8px;
	overflow:  ${({ allowOverflow }) => (allowOverflow ? 'visible' : 'hidden')};

	${({ hover }) =>
		hover &&
		css`
			cursor: pointer;

			&:hover {
				box-shadow: 0 12px 24px 0 rgba(184, 188, 194.05);
				transition: all 0.3s ease-in-out;
			}
		`}

	${({ withShadow, hover }) =>
		withShadow &&
		!hover &&
		css`
			box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
		`}

	${({ noBorder }) =>
		noBorder &&
		css`
			border: 0px;
		`}
`;

export const Content = styled.div<{
	noPadding: boolean;
}>`
	${({ noPadding }) =>
		!noPadding &&
		css`
			padding: 50px;
		`}
`;

export const Wrapper = styled.div``;
