// next
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Router } from 'next/router';

// react-query
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// recoil
import { RecoilRoot } from 'recoil';

// chakra-ui
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

import Nav from '../components/Nav';
import NProgress from 'nprogress';

import '../styles/nprogress.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({}));
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider theme={theme}>
            <Nav />
            <Component {...pageProps} />
          </ChakraProvider>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
