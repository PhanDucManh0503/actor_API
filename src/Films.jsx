import React from "react";
import axios from "axios";

function Film({ film, setFilms }) {
  const handleDelete = (id) => {
    // Tạm thời giả định URL của backend là localhost:3001
    axios
      .delete(`http://localhost:3001/api/films/${id}`)
      .then(() => {
        setFilms((films) => films.filter((film) => film.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting film", error);
      });
  };

  return (
    <div>
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <button onClick={() => handleDelete(film.id)}>Xóa</button>
    </div>
  );
}

export default Film;
