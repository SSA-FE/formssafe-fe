import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '@/components/user/userSlice';
import { AppDispatch, RootState } from '@/store';

export const useFetchUser = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchUser()).then((action) => {
      if (fetchUser.fulfilled.match(action)) {
        setLoading(false);
      }
    });
  }, [dispatch]);

  return { loading, error };
};
