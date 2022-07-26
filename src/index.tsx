import ReactDOM from 'react-dom/client';
import App from './App';
import { Boundary, BoundaryConfigProvider, CSSReset, ErrorFallback } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * 1000 * 60,
      suspense: true,
      retry: false,
      refetchOnWindowFocus: false,
      networkMode: 'always',
      // keepPreviousData: true,
    },
    mutations: {
      networkMode: 'always',
    },
  }
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BoundaryConfigProvider
    pendingFallback={null}
    FallbackComponent={ErrorFallback}
    onError={(error: any, { componentStack }: any) => {
      // const errorBoundaryError = new Error(error.message)
      // errorBoundaryError.name = `React ErrorBoundary Error`
      // errorBoundaryError.stack = componentStack
      // error.cause = errorBoundaryError
      // throw error
      // console.error('log to sentry', error)
      // console.error('----', componentStack)
    }}
  >
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Boundary fallback={null}>
          <App />
          <ReactQueryDevtools />
        </Boundary>
      </ChakraProvider>
    </QueryClientProvider>
  </BoundaryConfigProvider>
);


// reportWebVitals();
