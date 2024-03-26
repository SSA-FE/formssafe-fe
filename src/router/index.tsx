import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import Home from '@/pages/Home';
import Myspace from '@/pages/Myspace';
import NotFound from '@/pages/NotFound';
import Editor from '@/pages/Editor';
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
    {
      path: '/editor',
      element: <CheckUserAuth />,
      children: [{ path: '/editor', element: <Editor /> }],
    },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Router;
