'use client';

import React, { useState } from 'react';
import { auth, db } from '@/app/data/Firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SendMessage = () => {
  const [message, setMessage] = useState('');

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    addDoc(collection(db, 'messages'), {
      // addDoc()を使用し、textに状態変数messageを格納
      // auth.currentUser_認証された現ユーザーの情報取得
      text: message,
      photoUrl: auth.currentUser,
      userId: auth.currentUser,
      createdAt: serverTimestamp(),
    });

    setMessage('');
  };

  return (
    <>
      <form onSubmit={sendMessage}>
        <div>
          <input
            type='text'
            value={message}
            placeholder='Put down your message'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default SendMessage;
