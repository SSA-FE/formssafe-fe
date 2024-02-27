// import Sidebar from '@/components/Sidebar';
// import Topbar from '@/components/Topbar';
// import { IIsLoggedInState } from '@/interface/redux';
// import { RouterInfo } from '@/utils/router';
// import { useSelector } from 'react-redux';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const FSRouter = () => {
//   const isLoggedIn = useSelector(
//     (state: IIsLoggedInState) => state.isLogin.isLoggedIn
//   );

//   // routes에 routing할 페이지들 추가
//   const routes = createBrowserRouter(RouterInfo);

//   return (
//     <Router>
//       <div className="flex flex-row w-full h-full">
//         {isLoggedIn && <Sidebar />}
//         <div className="flex flex-col w-full h-full">
//           <Topbar />
//           <Routes>
//             {routes.map((route, key) => {
//               return (
//                 <Route
//                   key={`routes-${key}`}
//                   path={route.path}
//                   element={route.element}
//                 />
//               );
//             })}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default FSRouter;
