// !STARTERCONF You can delete this page
import * as React from 'react';

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

      <Container>
        <Header />
        <section
          className={`flex flex-col items-center gap-10 px-10 py-10 ${textColor} ${bgColor}`}
        >
          <h3>Kitchen Sink Here...</h3>
          <button className={`${textColor} border p-5`} onClick={toggleMode}>
            Toggle theme mode
          </button>
        </section>
      </Container>
    </Layout>
  );
}
