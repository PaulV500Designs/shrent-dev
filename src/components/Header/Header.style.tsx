import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.header`
  ${tw`z-50 bg-white w-full`}
  & > div {
    ${tw`flex h-14 items-center justify-between`}
  }
  & > div > a {
    ${tw`font-bold hover:text-gray-600`}
  }
  ul {
    ${tw`flex items-center gap-5 justify-between space-x-4 list-none`}
    a {
      ${tw`hover:text-gray-600 uppercase `}
    }
  }
`;

export default Header;
