import { Outlet } from 'react-router-dom';
import Topbar from '@/components/Topbar';
import { Suspense } from 'react';
import Loading from './Loading';

export default function Layout() {
  return (
    <Suspense fallback={<Loading />}>
      <Topbar bgColor="bg-gradient-to-r from-slate-50 to-_slate-25" />
      <Outlet />
    </Suspense>
  );
}
