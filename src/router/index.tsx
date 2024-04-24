import React from 'react';

import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import App from '@/App';
import NotFound from '@/pages/NotFound';

const Home = React.lazy(() => import('@/pages/Home'));
const Myspace = React.lazy(() => import('@/pages/Myspace'));
const Editor = React.lazy(() => import('@/pages/Editor'));
const Stat = React.lazy(() => import('@/pages/Stat'));
const StatDetail = React.lazy(() => import('@/pages/StatDetail'));

const StatLayout = React.lazy(() => import('@/components/StatLayout'));

const LoginRedirect = React.lazy(
  () => import('@/components/auth/LoginRedirect')
);

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, path: '/', element: <Home /> },
        {
          path: '/myspace',
          element: <Myspace />,
        },
        {
          path: '/editor',
          element: <Editor />,
        },
        {
          path: '/stat',
          element: <StatLayout />,
          children: [
            {
              index: true,
              element: <Stat />,
            },
            {
              path: '/stat/:id',
              element: <StatDetail />,
            },
          ],
        },
      ],
    },
    { path: '/join', element: <LoginRedirect /> },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Router;
