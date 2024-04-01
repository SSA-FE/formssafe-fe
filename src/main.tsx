import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Router from '@router/index';
import { fetchUsers } from '@components/users/userSlice';

import './index.css';

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
