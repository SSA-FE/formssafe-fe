import { Outlet } from 'react-router-dom';
import Topbar from '@/components/topbar/Topbar';
import { Suspense } from 'react';
import Loading from './Loading';

export default function Layout({ hasBackground }: { hasBackground: boolean }) {
  return (
    <Suspense fallback={<Loading />}>
      <div
        className={`w-full h-dvh
          ${hasBackground ? 'bg-gradient-to-r from-slate-50 to-_slate-25' : ''}
          `}
      >
        <Topbar />
        <Outlet />
      </div>
    </Suspense>
  );
}
