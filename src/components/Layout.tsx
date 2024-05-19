import { Outlet } from 'react-router-dom';
import Topbar from '@/components/topbar/Topbar';
import { Suspense, useEffect, useState } from 'react';
import Footer from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchUserQuery } from '@/api/userApi';

export default function Layout({ hasBackground }: { hasBackground: boolean }) {
  const { isError, refetch } = useFetchUserQuery();
  const [isFetched, setIsFetched] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  useEffect(() => {
    const fetchUser = async () => {
      await refetch();
      setIsFetched(true);
    };

    fetchUser();
  }, [refetch, path]);

  useEffect(() => {
    if (path !== '/' && path !== '/join/' && isFetched && isError) {
      setIsFetched(false);
      navigate('/', { replace: true });
    }
    setIsFetched(false);
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
