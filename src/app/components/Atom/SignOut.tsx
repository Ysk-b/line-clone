import { Button } from '@mui/material';
import { auth } from '@/app/data/Firebase';
import React from 'react';

const SignOut = () => {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  );
};

export default SignOut;
