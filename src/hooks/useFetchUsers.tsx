import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '@components/users/userSlice';
import { AppDispatch, RootState } from '@/store';

export const useFetchUsers = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers()).then((action) => {
      if (fetchUsers.fulfilled.match(action)) {
        setLoading(false);
      }
    });
  }, [dispatch]);

  return { loading, error };
};
