import styled, { css } from 'styled-components';

export const Card = styled.div<{
	withShadow?: boolean;
	allowOverflow?: boolean;
}>`
	background-color: #fff;
	text-align: left;
	border-radius: 8px;

	${({ withShadow }) =>
		withShadow &&
		css`
			box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
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
