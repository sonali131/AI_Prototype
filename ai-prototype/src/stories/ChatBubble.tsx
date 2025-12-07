//import React from 'react';

interface ChatBubbleProps {
  message: string;
  role: 'user' | 'ai';
}

export const ChatBubble = ({ message, role }: ChatBubbleProps) => {
  const isAi = role === 'ai';
  return (
    <div style={{
      display: 'flex',
      justifyContent: isAi ? 'flex-start' : 'flex-end',
      margin: '10px 0'
    }}>
      <div style={{
        maxWidth: '70%',
        padding: '12px',
        borderRadius: '12px',
        backgroundColor: isAi ? '#f1f5f9' : '#2563eb',
        color: isAi ? '#000' : '#fff',
        fontFamily: 'sans-serif'
      }}>
        <strong>{isAi ? '🤖 AI' : '👤 You'}</strong>
        <p style={{ margin: '5px 0 0 0' }}>{message}</p>
      </div>
    </div>
  );
};