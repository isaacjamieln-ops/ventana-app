// src/MessageList.jsx
import React, { useRef, useEffect } from 'react';

function MessageList({ messages, currentUser }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Convertir objeto a array y ordenar
  const messagesArray = Object.keys(messages || {})
    .map(key => ({
      id: key,
      ...messages[key]
    }))
    .sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

  if (messagesArray.length === 0) {
    return (
      <div className="text-center text-muted py-5">
        <p>No hay mensajes aún</p>
        <p className="small">¡Sé el primero en escribir!</p>
      </div>
    );
  }

  return (
    <div className="message-list" style={{ height: '400px', overflowY: 'auto', padding: '1rem' }}>
      {messagesArray.map((msg) => {
        const isCurrentUser = currentUser?.email === msg.author;

        return (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: isCurrentUser ? 'flex-end' : 'flex-start',
              marginBottom: '1rem'
            }}
          >
            <div
              style={{
                maxWidth: '70%',
                padding: '0.5rem 1rem',
                borderRadius: '1rem',
                backgroundColor: isCurrentUser ? '#007bff' : '#f1f1f1',
                color: isCurrentUser ? 'white' : 'black'
              }}
            >
              {!isCurrentUser && (
                <small style={{ display: 'block', color: '#666' }}>
                  {msg.authorName || msg.author?.split('@')[0]}
                </small>
              )}
              <div>{msg.text}</div>
              <small style={{ 
                display: 'block', 
                textAlign: 'right',
                color: isCurrentUser ? 'rgba(255,255,255,0.7)' : '#999'
              }}>
                {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : ''}
              </small>
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;