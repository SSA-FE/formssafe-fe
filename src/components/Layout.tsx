import { Outlet } from 'react-router-dom';
import Topbar from '@/components/Topbar';
import { Suspense } from 'react';
import Loading from './Loading';
import { useFetchUsers } from '@/hooks/useFetchUsers';

export default function Layout() {
  const { loading, error } = useFetchUsers();

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <Suspense fallback={<Loading />}>
      <Topbar />
      <Outlet />
    </Suspense>
  );
}
