import React, { useEffect, useState } from "react";
import axios from "axios";

const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/films");
      setFilms(response.data);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  };

  return (
    <div>
      <h2>Film List</h2>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
