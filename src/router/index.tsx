import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import Home from '@/pages/Home';
import Myspace from '@/pages/Myspace';
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
      path: '/myspace',
      element: <CheckUserAuth />,
      children: [{ path: '/myspace', element: <Myspace /> }],
    },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Router;
