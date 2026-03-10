import React from 'react';
import { Link } from 'react-router-dom';
import { useUserState } from '../firebase';

function ForoGeneral() {
  const { user } = useUserState();

  // Si no hay usuario, mostrar mensaje para iniciar sesión
  if (!user) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="mb-4">🔒 Foro de la Comunidad</h2>
                <p className="lead mb-4">
                  Debes iniciar sesión para acceder al foro y participar en las conversaciones.
                </p>
                <p className="text-muted">
                  Inicia sesión con Google usando el botón en la barra de navegación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Temas de discusión con iconos sólidos
  const temas = [
    {
      id: 1,
      titulo: '📢 Anuncios importantes',
      descripcion: 'Información oficial de la liga',
      icono: '📢'
    },
    {
      id: 2,
      titulo: '💬 Charla general',
      descripcion: 'Habla sobre cualquier tema',
      icono: '💬'
    },
    {
      id: 3,
      titulo: '⚽ Técnico-táctico',
      descripcion: 'Discute estrategias y entrenamientos',
      icono: '⚽'
    },
    {
      id: 4,
      titulo: '🎉 Eventos sociales',
      descripcion: 'Asados, fiestas y reuniones',
      icono: '🎉'
    },
    {
      id: 5,
      titulo: '🔄 Compra/Venta',
      descripcion: 'Equipamiento, camisetas, etc.',
      icono: '🔄'
    }
  ];

  return (
    <div className="container mt-4">
      {/* Encabezado */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="bg-primary text-white p-4 rounded">
            <h1>Foro de la Comunidad</h1>
            <p className="lead mb-0">
              Conéctate con otros padres, comparte experiencias y organiza actividades
            </p>
          </div>
        </div>
      </div>

      {/* Temas de discusión */}
      <div className="row">
        <div className="col-12">
          <h3 className="mb-3">Temas de discusión</h3>
        </div>
        {temas.map(tema => (
          <div className="col-md-6 col-lg-4 mb-3" key={tema.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>
                    {tema.icono}
                  </span>
                  {tema.titulo}
                </h5>
                <p className="card-text text-muted">{tema.descripcion}</p>
                <Link to="#" className="btn btn-outline-primary btn-sm">
                  Ver discusiones →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Próximos partidos */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-warning">
              <h5 className="mb-0">⚽ Próximos partidos</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-2">
                  <div className="border rounded p-3">
                    <h6>Partido 2021_09_01_1</h6>
                    <p className="small text-muted mb-2">15 Mar - 10:00 AM</p>
                    <Link to="/game/game-1/mensajes" className="btn btn-sm btn-outline-primary">
                      Ver chat
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="border rounded p-3">
                    <h6>Partido 2021_09_02_1</h6>
                    <p className="small text-muted mb-2">16 Mar - 3:00 PM</p>
                    <Link to="/game/game-2/mensajes" className="btn btn-sm btn-outline-primary">
                      Ver chat
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Muro simple */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Mensajes recientes</h5>
            </div>
            <div className="card-body">
              <p className="text-muted text-center py-4">
                No hay mensajes aún. ¡Sé el primero en publicar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForoGeneral;