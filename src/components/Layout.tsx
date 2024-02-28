import { Outlet } from 'react-router-dom';
import Topbar from '@/components/Topbar';
import { Suspense } from 'react';
import CustomLoader from '@/utils/loader';

export default function Layout() {
  return (
    <>
      <Topbar />
      <Suspense fallback={<CustomLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
