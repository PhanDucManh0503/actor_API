import React, { useState } from "react";
import axios from "axios";

const DeleteFilm = ({ onDelete }) => {
  const [filmId, setFilmId] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/films/${filmId}`);
      onDelete(filmId); // Update the film list
      setFilmId("");
    } catch (error) {
      console.error("Error deleting film:", error);
    }
  };

  return (
    <div>
      <h2>Delete Film</h2>
      <input
        type="text"
        placeholder="Enter Film ID to delete"
        value={filmId}
        onChange={(e) => setFilmId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Film</button>
    </div>
  );
};

export default DeleteFilm;
