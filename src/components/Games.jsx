import React, { useEffect, useState } from "react";

function Games() {
  // Inicializamos como arreglo vacío para que map nunca falle
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Simulamos un fetch; reemplaza con tu API real
    fetch("/api/games")
      .then((res) => res.json())
      .then((data) => {
        // Validamos que realmente sea un array
        if (Array.isArray(data)) {
          setGames(data);
        } else if (Array.isArray(data.games)) {
          setGames(data.games);
        } else {
          console.warn("La data no es un array:", data);
          setGames([]); // fallback
        }
      })
      .catch((err) => {
        console.error("Error al obtener los juegos:", err);
        setGames([]); // fallback en caso de error
      });
  }, []);

  return (
    <div>
      <h2>Lista de Juegos</h2>
      {games.length === 0 ? (
        <p>No hay juegos disponibles</p>
      ) : (
        // Solo map si games es un array y tiene elementos
        games.map((game) => (
          <div key={game.id}>
            <h3>{game.name}</h3>
            <p>{game.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Games;