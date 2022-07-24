import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw` my-0 mx-auto py-0 px-[0.5rem] items-center flex max-w-[1200px] justify-center flex-nowrap flex-col `}
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  ${tw`flex flex-col justify-center items-center`}
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export { CodeTag, Container, Description, Main, Title };
