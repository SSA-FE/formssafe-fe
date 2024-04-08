import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Router from '@router/index';
import './index.css';
import { worker } from './mocks/browser';

if (import.meta.env.VITE_APP_NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
