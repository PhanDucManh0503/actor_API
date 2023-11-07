import React, { useState } from "react";
import axios from "axios";

const FilmDetails = () => {
  const [filmId, setFilmId] = useState("");
  const [film, setFilm] = useState(null);

  const fetchFilm = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/films/${filmId}`
      );
      setFilm(response.data);
    } catch (error) {
      console.error("Error fetching film:", error);
      setFilm(null);
    }
  };

  return (
    <div>
      <h2>Get Film Details</h2>
      <input
        type="text"
        placeholder="Enter Film ID"
        value={filmId}
        onChange={(e) => setFilmId(e.target.value)}
      />
      <button onClick={fetchFilm}>Get Film</button>
      {film && (
        <div>
          <h3>{film.title}</h3>
          <p>{film.description}</p>
        </div>
      )}
    </div>
  );
};

export default FilmDetails;
