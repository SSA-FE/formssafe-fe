import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import Home from '@/pages/Home';
import Workspace from '@/pages/Workspace';
import NotFound from '@/pages/NotFound';
import CheckUserAuth from '@/components/auth/CheckUserAuth';

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: '/main',
      element: <CheckUserAuth />,
      children: [{ path: '/main', element: <Workspace /> }],
    },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Router;
