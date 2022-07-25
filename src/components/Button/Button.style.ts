import styled from 'styled-components';
import tw from 'twin.macro';

export const Button = styled.button`
  ${tw`flex flex-row items-center cursor-pointer
  gap-[20px] rounded-[8px] py-[16px] px-[20px] 
  w-full justify-center text-base
  `}
  border: none;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const DarkOutline = styled(Button)`
  ${tw`bg-white`}
  border: 1px solid rgba(28, 52, 84, 0.26);
`;

export const WhiteOutline = styled(Button)`
  ${tw`bg-transparent`}
  color: white;
  border: 2px solid white;
`;

export const Secondary = styled(Button)`
  ${tw`bg-white text-black shadow-md`}
`;

export const Unstyled = styled(Button)`
  ${tw`bg-none p-0 text-black text-sm font-light
  border-none border-0 bg-transparent inline-block w-auto`}
`;

export const Default = styled(Button)`
  ${tw`bg-blue text-white`}
`;
