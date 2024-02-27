import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Workspace from '@/pages/Workspace';

export const RouterInfo = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/main',
    element: <Workspace />,
  },
];
