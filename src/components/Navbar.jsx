import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUserState, signInWithGoogle, signOutUser } from '../firebase';

function Navbar() {

  const { user, loading } = useUserState();
  const location = useLocation();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      alert('Error al cerrar sesión: ' + error.message);
    }
  };

  const pathParts = location.pathname.split('/');

  const esDetalleJuego =
    pathParts.length === 3 &&
    pathParts[1] === 'game' &&
    !pathParts[2].includes('mensajes');

  const juegoId = esDetalleJuego ? pathParts[2] : null;

  if (loading) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Cargando...</span>
        </div>
      </nav>
    );
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          <i className="bi bi-chat-heart-fill me-2"></i>
          Ventana App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door me-1"></i>
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/games">
                <i className="bi bi-trophy me-1"></i>
                Partidos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="bi bi-info-circle me-1"></i>
                Acerca de
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="bi bi-envelope me-1"></i>
                Contacto
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/rules">
                <i className="bi bi-book me-1"></i>
                Reglas
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register">
                <i className="bi bi-person-plus me-1"></i>
                Registro
              </Link>
            </li>

            {/* 📷 NUEVO BOTON GALERIA GLOBAL */}

            {user && (
              <li className="nav-item">
                <Link className="nav-link" to="/photos">
                  <i className="bi bi-images me-1"></i>
                  Fotos
                </Link>
              </li>
            )}

            {/* Chat del partido */}

            {user && esDetalleJuego && (

              <li className="nav-item">

                <Link
                  className="nav-link btn btn-outline-warning text-white ms-lg-2"
                  to={`/game/${juegoId}/mensajes`}
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: '#ffc107',
                    color: '#ffc107',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem'
                  }}
                >

                  <i className="bi bi-chat-dots me-1"></i>
                  💬 Chat del Partido

                </Link>

              </li>

            )}

            {/* Fotos del partido */}

            {user && esDetalleJuego && (

              <li className="nav-item">

                <Link
                  className="nav-link btn btn-outline-info text-white ms-lg-2"
                  to={`/fotos/${juegoId}`}
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: '#0dcaf0',
                    color: '#0dcaf0',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem'
                  }}
                >

                  <i className="bi bi-image me-1"></i>
                  📷 Fotos del Partido

                </Link>

              </li>

            )}

          </ul>

          <div className="d-flex align-items-center">

            {user ? (

              <div className="d-flex align-items-center text-white">

                {user.photoURL ? (

                  <img
                    src={user.photoURL}
                    alt="user"
                    className="rounded-circle me-2"
                    style={{
                      width: '32px',
                      height: '32px',
                      objectFit: 'cover'
                    }}
                  />

                ) : null}

                <span className="me-3 d-none d-lg-inline">
                  {user.displayName || user.email}
                </span>

                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={handleSignOut}
                >
                  <i className="bi bi-box-arrow-right me-1"></i>
                  Cerrar sesión
                </button>

              </div>

            ) : (

              <button
                className="btn btn-outline-light"
                onClick={handleSignIn}
              >

                <i className="bi bi-google me-2"></i>
                Iniciar sesión con Google

              </button>

            )}

          </div>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;