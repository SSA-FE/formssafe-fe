import { Outlet } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import StatTopBar from '@components/Statistic/StatTopBar';

const StatLayout = () => {
  return (
    <Fragment>
      <StatTopBar />
      <Outlet />
    </Fragment>
  );
};

export default StatLayout;
