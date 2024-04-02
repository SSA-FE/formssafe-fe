import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Router from '@router/index';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
