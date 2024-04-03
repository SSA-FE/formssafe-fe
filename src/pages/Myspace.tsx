import Toolbar from '@/components/Myspace/Toolbar';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Myspace = () => {
  const { user } = useSelector((state: RootState) => state.user);

  console.log(user);
  return (
    <>
      <Toolbar />
    </>
  );
};

export default Myspace;
