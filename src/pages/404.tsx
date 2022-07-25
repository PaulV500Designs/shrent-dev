import Link from 'next/link';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';
import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

import { Container } from '@/styles/sharedstyles';

const Section = styled.section`
  ${tw`bg-white h-screen items-center`}
  h1 {
    ${tw`mt-8 text-4xl md:text-6xl`}
  }
  a {
    ${tw`mt-4 md:text-lg`}
  }
  svg {
    ${tw`drop-shadow-lg animate-flicker text-red-500`}
  }
`;
const Inner = styled.div`
  ${tw`flex min-h-screen flex-col items-center justify-center text-center text-black`}
`;

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <Section>
        <Container>
          <Inner>
            <RiAlarmWarningFill
              size={60}
            />
            <h1>Page Not Found</h1>
            <Link href='/'>
              Back to Home
            </Link>
          </Inner>
        </Container>
      </Section>
    </Layout>
  );
}
