// next
import type { AppProps } from 'next/app';
import { useState } from 'react';

// react-query
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// recoil
import { RecoilRoot } from 'recoil';

// chakra-ui
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

import Nav from '../components/Nav';

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
