'use client';

import { auth } from '@/app/data/Firebase';
import { Button } from '@mui/material';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const signInWithGoogle = () => {
    // Googleの認証機能を使用可能にする
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
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

// 1. FIrebaseの初期化
// 2. Firestoreの初期化・値を渡す
