import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/globalstyles';

const theme: DefaultTheme = {
  // NOTE: Set project style variables in tailwind.config and use them in globalStyles below is just for demo
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}