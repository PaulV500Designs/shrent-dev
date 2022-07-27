import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'twin.macro'; // new

import AppStyles from '@/styles/globalstyles';


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
    return <>Not in browser...</>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}