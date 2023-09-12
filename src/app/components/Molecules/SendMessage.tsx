'use client';

import css from 'styled-jsx/css';
import React, { useState } from 'react';
import { auth, db } from '@/app/data/Firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const styles = css`
  .message > :global(.message-input) {
    width: 80%;
    font-size: 16px;
    font-weight: 500;
    margin-left: 4px;
    margin: 0 0 4px 4px;
  }

  .message > :global(.message-icon) {
    color: #7ac2ff;
    margin-left: 20px;
  }
`;

const SendMessage = () => {
  const [message, setMessage] = useState('');
  const currentUser = auth.currentUser;

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentUser) {
      addDoc(collection(db, 'messages'), {
        // addDoc()を使用し、textに状態変数messageを格納
        text: message,
        photoURL: currentUser.photoURL,
        uid: currentUser.uid,
        createdAt: serverTimestamp(),
      });
    }

    setMessage('');
  };

  return (
    <>
      <style jsx>{styles}</style>
      <form onSubmit={sendMessage}>
        <div className='message'>
          <Input
            type='text'
            value={message}
            placeholder='Put down your message'
            className='message-input'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          />
          <SendIcon className='message-icon' />
        </div>
      </form>
    </>
  );
};

export default SendMessage;
