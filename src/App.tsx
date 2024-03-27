import Router from '@/router';
import Topbar from '@/components/Topbar';
import { useState } from 'react';

function App() {
  const [isAuthenticated] = useState(true);

  return (
    <>
      <Topbar isAuthenticated={isAuthenticated} />
      <Router />
    </>
  );
}

export default App;
