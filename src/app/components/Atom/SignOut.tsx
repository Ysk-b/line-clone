import { Button } from '@mui/material';
import { auth } from '@/app/data/Firebase';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';

const SignOut = () => {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
      <h3>{auth.currentUser?.displayName}</h3>
      <CallIcon />
    </div>
  );
};

export default SignOut;
