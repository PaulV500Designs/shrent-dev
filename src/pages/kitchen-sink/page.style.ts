import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const KitchenLayout = styled.main`
  height: auto;
  width: 100%;
  > section {
    ${tw`py-[60px]`}
    &:nth-child(odd) {
      ${tw`bg-gray-200`}
    }
    > div > h3 {
      ${tw`self-baseline`}
    }
    article {
      ${tw`mt-[40px] w-full flex flex-row gap-5`}
    }
  }
`;

export default KitchenLayout;
