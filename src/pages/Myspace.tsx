import Toolbar from '@/components/Myspace/Toolbar';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '@components/users/userSlice';

const Myspace = () => {
  const users = useSelector(selectAllUsers);

  console.log(users);
  return (
    <>
      <Toolbar />
    </>
  );
};

export default Myspace;
