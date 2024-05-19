import MyspacePanel from '@/components/Myspace/MyspacePanel';
import MyspaceMain from '@/components/Myspace/MyspaceMain';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { reset } from '@/components/Myspace/toolbar/toolbarInputSlice';

const Myspace = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path === '/myspace') {
      dispatch(reset());
    }
  }, [path, dispatch]);
  return (
    <div className="w-full h-screen bg-neutral-100 ">
      <MyspacePanel />
      <MyspaceMain />
    </div>
  );
};

export default Myspace;
