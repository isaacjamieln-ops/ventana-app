// src/components/GameMessages.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { database, auth } from '../firebase';
import { ref, push, onValue } from 'firebase/database';

function GameMessages() {
  const { id: gameId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // Escuchar cambios en la autenticación
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  // Cargar mensajes
  useEffect(() => {
    if (!gameId) return;

    const messagesRef = ref(database, `games/${gameId}/messages`);
    const unsubscribe = onValue(messagesRef, 
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const msgs = Object.entries(data).map(([id, value]) => ({
            id,
            ...value
          })).sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
          setMessages(msgs);
          setError('');
        } else {
          setMessages([]);
        }
      },
      (error) => {
        console.error('Error al cargar mensajes:', error);
        setError('No se pudieron cargar los mensajes. Verifica permisos.');
      }
    );

    return () => unsubscribe();
  }, [gameId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    if (!user) {
      setError('Debes iniciar sesión para enviar mensajes');
      return;
    }

    try {
      const messagesRef = ref(database, `games/${gameId}/messages`);
      await push(messagesRef, {
        text: newMessage.trim(),
        user: user.displayName || user.email || 'Usuario',
        userId: user.uid,
        timestamp: Date.now()
      });
      setNewMessage('');
      setError('');
    } catch (err) {
      console.error('Error detallado:', err);
      setError(`Error: ${err.message}. Verifica las reglas de Firebase.`);
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Mensajes del Juego {gameId}</h2>
      
      {!user && (
        <div style={{ 
          backgroundColor: '#fff3cd', 
          color: '#856404', 
          padding: '0.75rem', 
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          ⚠️ Necesitas <button 
            onClick={() => {/* Aquí tu función de login */}} 
            style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
          >
            iniciar sesión
          </button> para enviar mensajes
        </div>
      )}
      
      {error && (
        <div style={{ 
          backgroundColor: '#f8d7da', 
          color: '#721c24', 
          padding: '0.75rem', 
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          ❌ {error}
        </div>
      )}

      <div style={{ 
        maxHeight: '400px', 
        overflowY: 'auto', 
        marginBottom: '1rem', 
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '1rem',
        backgroundColor: '#f9f9f9'
      }}>
        {messages.length === 0 ? (
          <p style={{ color: '#666', textAlign: 'center' }}>No hay mensajes aún. ¡Sé el primero!</p>
        ) : (
          messages.map(msg => (
            <div 
              key={msg.id} 
              style={{ 
                marginBottom: '0.75rem',
                padding: '0.5rem',
                backgroundColor: msg.userId === user?.uid ? '#e3f2fd' : 'white',
                borderRadius: '4px',
                border: '1px solid #eee'
              }}
            >
              <strong style={{ color: '#333' }}>{msg.user}:</strong>{' '}
              <span style={{ color: '#555' }}>{msg.text}</span>
              <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.25rem' }}>
                {new Date(msg.timestamp).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={user ? "Escribe tu mensaje..." : "Inicia sesión para escribir"}
          disabled={!user}
          style={{ 
            flex: 1, 
            padding: '0.75rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        />
        <button 
          type="submit" 
          disabled={!user || !newMessage.trim()}
          style={{ 
            padding: '0.75rem 1.5rem',
            backgroundColor: !user || !newMessage.trim() ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: !user || !newMessage.trim() ? 'not-allowed' : 'pointer',
            fontSize: '1rem'
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default GameMessages;