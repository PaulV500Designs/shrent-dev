import Link from 'next/link';
import * as React from 'react';
import 'twin.macro';

import Cards from '@/components/cards';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

import {
  CodeTag,
  Container,
  Description,
  Main,
} from '@/styles/sharedstyles';

export default function HomePage() {
  return (
    <Layout>

      <Seo />

      <Container>
        <Main>
          <h2 tw='text-center max-w-[1024px]'>Next.js + TypeScript + Styled Components + Tailwind CSS Starter</h2>

          <Description>
            Get started by editing
            <CodeTag>pages/index.tsx</CodeTag>
          </Description>

          <Link href='/kitchen-sink'>
            <a tw='inline-block mt-10 underline text-blue cursor-pointer'>See all components</a>
          </Link>

          <Cards>
            <Link href='/test' passHref>
              Test Page
            </Link>
          </Cards>
        </Main>
      </Container>
    </Layout>
  );
}
