// !STARTERCONF You can delete this page
import * as React from 'react';
import 'twin.macro';

import Button from '@/components/Button';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

import { Container } from '@/styles/sharedstyles';

export default function ComponentsPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');

  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-gray-100' : 'text-gray-600';
  const bgColor = mode === 'dark' ? 'bg-gray-700' : 'bg-white';

  return (
    <Layout>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />


      <Header />
      <section
        className={`flex flex-col items-center gap-10 px-10 py-10 ${textColor} ${bgColor}`}
      >
        <Container>
          <h2>Kitchen Sink </h2>
        </Container>
      </section>

      <section tw="w-full bg-gray-300 py-10">
        <Container>
          <h3>Buttons:</h3>
          <div tw="flex flex-row gap-5 w-full">
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="white-outline">White Outline Button</Button>
          </div>
        </Container>
      </section>


    </Layout>
  );
}
