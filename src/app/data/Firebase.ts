import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDaTYhVKJU5_t90U3EqIjMWHxYwsyph-VU',
  authDomain: 'line-app-93f7f.firebaseapp.com',
  projectId: 'line-app-93f7f',
  storageBucket: 'line-app-93f7f.appspot.com',
  messagingSenderId: '800360565946',
  appId: '1:800360565946:web:b6873774bf51784d610683',
};

// 1. Initialize Firebase
const app = initializeApp(firebaseConfig);
// 2. Initialize Firestore(DB) passing app to getFireStore()
const db = getFirestore(app);
// 3. Get Authentification info with firebase.auth()
const auth = getAuth();
// 4. Get Google Authentification info with GoogleAuthProvider()
const provider = new GoogleAuthProvider();

export { db, auth, provider };
