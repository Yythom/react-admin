import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import './App.scss'
import './var.scss'
import './font/iconfont.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'yyt-hooks';
dayjs.locale('zh-cn');

if (process?.env?.NODE_ENV !== "development") window.console.log = () => { }
const queryClient = new QueryClient()
ReactDOM.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
                < App />
            </ErrorBoundary>
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root')
);
