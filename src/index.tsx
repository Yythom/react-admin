import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'dayjs/locale/zh-cn';
import './App.scss'
import './var.scss'
import './font/iconfont.css';
import dayjs from 'dayjs';
import { Provider } from 'react-redux';
import store from './store';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from './components/Boundary';
dayjs.locale('zh-cn');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient()
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        < App />
      </ErrorBoundary>
    </QueryClientProvider>
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
