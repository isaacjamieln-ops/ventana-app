// src/components/GameMessages.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// 📁 Importaciones desde firebase.js en la raíz
import { useUserState } from '../firebase';
import { ref, push, onValue } from "firebase/database";
import { database } from "../firebase";

import MessageList from './MessageList';
import './MensajesJuego.css';


function GameMessages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useUserState();

  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState({});
  const [sending, setSending] = useState(false);

  // Depuración
  useEffect(() => {
    console.log("✅ GameMessages montado - ID:", id);
    console.log("👤 Usuario:", user?.email);
  }, [id, user]);

  // Cargar mensajes
  useEffect(() => {
    if (!id) {
      console.error("❌ No hay ID del partido");
      return;
    }

    const messagesRef = ref(database, `messages/${id}`);
    console.log("📡 Escuchando:", `messages/${id}`);

    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      console.log("📥 Mensajes recibidos:", data);
      setMessages(data || {});
    }, (error) => {
      console.error("❌ Error Firebase:", error);
    });

    return () => unsubscribe();
  }, [id]);

  // Enviar mensaje
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!user) {
      alert('Debes iniciar sesión');
      return;
    }

    if (!newMessage.trim() || !id) return;

    setSending(true);

    try {
      const messageData = {
        author: user.email,
        authorName: user.displayName || user.email.split('@')[0],
        text: newMessage.trim(),
        timestamp: Date.now(),
        photoURL: user.photoURL || null
      };

      console.log("📤 Enviando:", messageData);

      const messagesRef = ref(database, `messages/${id}`);
      await push(messagesRef, messageData);
      
      setNewMessage('');
    } catch (error) {
      console.error('❌ Error:', error);
      alert('Error al enviar: ' + error.message);
    } finally {
      setSending(false);
    }
  };

  if (authLoading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 mx-auto">
          
          {/* Botón volver */}
          <button 
            className="btn btn-link mb-2"
            onClick={() => navigate('/games')}
          >
            ← Volver a partidos
          </button>

          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  Chat del Partido {id && `#${id}`}
                </h5>
                <span className="badge bg-light text-primary">
                  {Object.keys(messages).length} mensajes
                </span>
              </div>
            </div>

            <div className="card-body p-0">
              
              {/* MessageList desde src/MessageList.jsx */}
              <MessageList
                messages={messages}
                currentUser={user}
              />

              {/* Input de mensaje */}
              <div className="p-3 border-top">
                {!user ? (
                  <div className="alert alert-info mb-0 text-center">
                    Inicia sesión para participar en el chat
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="d-flex gap-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Escribe tu mensaje..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      disabled={sending}
                      maxLength="500"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={sending || !newMessage.trim()}
                    >
                      {sending ? 'Enviando...' : 'Enviar'}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameMessages;