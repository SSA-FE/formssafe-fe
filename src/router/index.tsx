import React from 'react';

import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import NotFound from '@pages/NotFound';
import Layout from '@components/Layout';

const Home = React.lazy(() => import('@/pages/Home'));
const Myspace = React.lazy(() => import('@/pages/Myspace'));
const Board = React.lazy(() => import('@pages/Board'));
const Editor = React.lazy(() => import('@/pages/Editor'));
const Stat = React.lazy(() => import('@/pages/Stat'));
const StatDetail = React.lazy(() => import('@/pages/StatDetail'));
const StatLayout = React.lazy(() => import('@/components/StatLayout'));
const LoginRedirect = React.lazy(
  () => import('@components/auth/LoginRedirect')
);
const Form = React.lazy(() => import('@pages/Form'));

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout hasBackground={true} />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'board',
          element: <Board />,
        },
      ],
    },
    {
      path: '/',
      element: <Layout hasBackground={false} />,
      errorElement: <NotFound />,
      children: [
        {
          path: 'myspace',
          element: <Myspace />,
        },
        { path: 'join', element: <LoginRedirect /> },
        {
          path: 'editor',
          element: <Editor />,
        },
        {
          path: 'stat',
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
        {
          path: 'board',
          element: <Board />,
        },
        {
          path: 'form/:id',
          element: <Form />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Router;
