// !STARTERCONF You can delete this page
import * as React from 'react';
import 'twin.macro';

import Button from '@/components/Button';
import Header from '@/components/Header';
import Seo from '@/components/Seo';

import KitchenLayout from '@/pages/kitchen-sink/page.style';
import { Container } from '@/styles/sharedstyles';

export default function ComponentsPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');

  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-gray-100' : 'text-gray-600';
  const bgColor = mode === 'dark' ? 'bg-gray-700' : 'bg-white';

  return (
    <KitchenLayout>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />

      <Container>
        <Header />
      </Container>

      <section>
        <Container>
          <h2>Kitchen Sink </h2>
        </Container>
      </section>

      <section>
        <Container>
          <h3>Buttons:</h3>
          <article>
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="white-outline">White Outline Button</Button>
          </article>
        </Container>
      </section>

      <section>
        <Container>
          <h3>Headings (<small>font-family: 'Titillium Web'</small>)</h3>

          <article tw='!flex-col' >
            <h1>h1: The brown fox jumped over the lazy dog.</h1>
            <h2>h2: The brown fox jumped over the lazy dog.</h2>
            <h3>h3: The brown fox jumped over the lazy dog.</h3>
            <h4>h4: The brown fox jumped over the lazy dog.</h4>
            <h4>h5: The brown fox jumped over the lazy dog.</h4>
          </article>
        </Container>
      </section>

      <section>
        <Container>
          <h3>Body (<small tw='font-body'>font-family: 'Inter'</small>)</h3>
          <article tw='!flex-col' >
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
            <p>Curse you and all the halflings! Deserted anytime Lake-town burned caves balls. Smoked lthilien forbids Thrain?</p>
            <ul>
              <li>Adamant.</li>
              <li>Southfarthing!</li>
              <li>Witch-king.</li>
              <li>Precious.</li>
              <li>Gaffer's!</li>
            </ul>
          </article>
        </Container>
      </section>


    </KitchenLayout >
  );
}
