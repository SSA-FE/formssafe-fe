import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { RouterInfo } from '@/utils/router';
import Topbar from '@/components/Topbar';

const router = createBrowserRouter(RouterInfo);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Topbar />
    <RouterProvider router={router} />
  </Provider>
);
