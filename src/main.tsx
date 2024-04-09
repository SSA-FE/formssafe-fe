import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Router from '@router/index';
import './index.css';

async function enableMocking() {
  if (import.meta.env.VITE_APP_NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <Router />
    </Provider>
  );
});
