import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import Home from '@/pages/Home';
import Myspace from '@/pages/Myspace';
import NotFound from '@/pages/NotFound';
import Editor from '@/pages/Editor';
import GoogleOAuth from '@/components/auth/GoogleOAuth';
import App from '@/App';

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
      ],
    },
    { path: '/join', element: <GoogleOAuth /> },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Router;
