import Link from 'next/link';
import * as React from 'react';

import Cards from '@/components/cards';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

import {
  CodeTag,
  Container,
  Description,
  Main,
  Title,
} from '@/styles/sharedstyles';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <Container>
        <Main>
          <Title>
            Next.js + TypeScript + Styled Components + Tailwind CSS <br />{' '}
            Starter
          </Title>

          <Description>
            Get started by editing
            <CodeTag>pages/index.tsx</CodeTag>
          </Description>

          <Link className='mt-6' href='/components'>
            See all components
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
