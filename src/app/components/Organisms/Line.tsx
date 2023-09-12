'use client';

import React, { useEffect, useState } from 'react';
import SignOut from '../Atom/SignOut';
import { db } from '@/app/data/Firebase';
import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore';

const Line = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // 1. messagesコレクションからpostDataとしてデータ取得
    const postData = collection(db, 'messages');
    // 2. 更新順に降順で表示
    const modPostData = query(postData, orderBy('createdAt', 'desc'), limit(50));

    // 3. リアルタイムでデータ取得
    onSnapshot(modPostData, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      <SignOut />
      <div className='messages'>
        {messages.map(({ id, text, photoUrl, userId }) => (
          <div key={id} className='messages'>
            <img src={photoUrl} alt='' />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Line;
