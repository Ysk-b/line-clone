'use client';

import SignIn from './components/Atom/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './data/Firebase';
import Line from './components/Organisms/Line';

const App = () => {
  const user = useAuthState(auth);
  return <div>{user ? <Line /> : <SignIn />}</div>;
};

export default App;