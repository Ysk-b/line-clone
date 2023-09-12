'use client';

import { auth, provider } from '@/app/data/Firebase';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('success');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Button onClick={signInWithGoogle}>Login With Google</Button>
    </div>
  );
};

export default SignIn;
