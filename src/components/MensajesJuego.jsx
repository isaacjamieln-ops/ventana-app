import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUserState } from '../firebase';
import MessageList from './MessageList';
import sampleMessages from '../data/sampleMessages.json';
// import './MensajesJuego.css'; // Comenta esto si no tienes el CSS

function MensajesJuego() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading } = useUserState();
  const [mensajes, setMensajes] = useState({});
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  console.log('MensajesJuego - id:', id);
  console.log('MensajesJuego - user:', user);

  useEffect(() => {
    const mensajesJuego = sampleMessages.mensajes?.[id] || {};
    setMensajes(mensajesJuego);
    console.log('Mensajes cargados:', mensajesJuego);
  }, [id]);

  useEffect(() => {
    if (!loading && !user) {
      alert('Debes iniciar sesión para ver los mensajes');
      navigate('/');
    }
  }, [user, loading, navigate]);

  const handleEnviarMensaje = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert('Debes iniciar sesión para enviar mensajes');
      return;
    }

    if (!nuevoMensaje.trim()) return;

    setEnviando(true);

    const nuevoMsg = {
      autor: user.email,
      texto: nuevoMensaje.trim(),
      marcaTiempo: Date.now()
    };

    const msgId = `mensaje-${Date.now()}`;

    setMensajes(prev => ({
      ...prev,
      [msgId]: nuevoMsg
    }));

    setNuevoMensaje('');
    setEnviando(false);
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card shadow">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-0">
                  <i className="bi bi-chat-dots me-2"></i>
                  Chat del Partido
                </h5>
                <small>
                  {Object.keys(mensajes).length} mensajes
                </small>
              </div>
              <button 
                className="btn btn-sm btn-light"
                onClick={() => navigate(`/game/${id}`)}
              >
                ← Volver al juego
              </button>
            </div>
            
            <div 
              className="messages-container" 
              style={{ 
                height: '500px', 
                overflowY: 'auto', 
                backgroundColor: '#f8f9fa',
                borderBottom: '1px solid #dee2e6'
              }}
            >
              <MessageList 
                mensajes={mensajes} 
                usuarioActual={user} 
              />
            </div>

            <div className="card-footer">
              <form onSubmit={handleEnviarMensaje} className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escribe tu mensaje..."
                  value={nuevoMensaje}
                  onChange={(e) => setNuevoMensaje(e.target.value)}
                  disabled={enviando}
                  maxLength="500"
                />
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={enviando || !nuevoMensaje.trim()}
                >
                  {enviando ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Enviando...
                    </>
                  ) : (
                    'Enviar'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MensajesJuego;