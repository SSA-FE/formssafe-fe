import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { IIsLoggedInState } from '@/interface/redux';
import Home from '@/pages/Home';
import Workspace from '@/pages/Workspace';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const FSRouter = () => {
  const isLoggedIn = useSelector(
    (state: IIsLoggedInState) => state.isLogin.isLoggedIn
  );
  interface IRoute {
    path: string;
    element: JSX.Element;
  }

  // routes에 routing할 페이지들 추가
  const routes: IRoute[] = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/main',
      element: <Workspace />,
    },
  ];

  return (
    <Router>
      <div className="flex flex-row w-full h-full">
        {isLoggedIn && <Sidebar />}
        <div className="flex flex-col w-full h-full">
          <Topbar />
          <Routes>
            {routes.map((route, key) => {
              return (
                <Route
                  key={`routes-${key}`}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default FSRouter;
