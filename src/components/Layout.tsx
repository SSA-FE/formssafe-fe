import { Outlet } from 'react-router-dom';
import Topbar from '@/components/topbar/Topbar';
import { Suspense, useEffect } from 'react';
import Footer from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchUserQuery } from '@/api/userApi';

export default function Layout({ hasBackground }: { hasBackground: boolean }) {
  const { isError } = useFetchUserQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  useEffect(() => {
    if (path !== '/' && path !== '/join/' && isError) {
      navigate('/', { replace: true });
    }
  }, [isError, path, navigate]);

  return (
    <Suspense>
      <div
        className={`w-full h-full min-h-screen
          ${hasBackground ? 'bg-gradient-to-r from-slate-50 to-_slate-25' : ''}
          `}
      >
        <Topbar />
        <Outlet />
        {(path === '/' || path === '/board') && <Footer />}
      </div>
    </Suspense>
  );
}
