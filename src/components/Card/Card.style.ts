import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const Card = styled.div<{
  withShadow?: boolean;
  allowOverflow?: boolean;
}>`
  background-color: #fff;
  text-align: center;
  border-radius: 8px;

  h3 {
    margin-bottom: 10px;
  }
  p {
    ${tw`text-gray`}
  }

  ${({ withShadow }) =>
    withShadow &&
    css`
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
    `}
`;

export const Content = styled.div<{
  noPadding: boolean;
}>`
  ${tw`flex flex-col gap-[30px]`}
  > button {
    svg {
      height: 19px;
      width: 19px;
    }
  }

  ${({ noPadding }) =>
    !noPadding &&
    css`
      padding: 50px;
    `}
`;
