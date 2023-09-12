'use client';

import SignIn from './components/Atom/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './data/Firebase';
import Line from './components/Organisms/Line';

const App = () => {
  const [user] = useAuthState(auth);
  return <div>{user ? <Line /> : <SignIn />}</div>;
};

export default App;

// 1. Firebaseサイドで、auth, Firestoreの事前設定
// 2. Firebase.tsで以下の手順で初期化
//  ➀ FireBaseの初期化
//  ➁ FireStoreに➀を渡してFirestore初期化
//  ➂ auth, providerを関数で取得
//  ➃ ➁、➂をexport
// 3. signInWithPopupにauth, providerを渡し、認証を有効化
// 4. 「認証中か否か」状態の管理には、useAuthState(auth)を使用