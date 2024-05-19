import { Outlet } from 'react-router-dom';
import Topbar from '@/components/topbar/Topbar';
import { Suspense } from 'react';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

export default function Layout({ hasBackground }: { hasBackground: boolean }) {
  const location = useLocation();
  const path = location.pathname;

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
