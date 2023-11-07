import React, { useState } from "react";
import axios from "axios";

function AddFilm({ setFilms }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tạm thời giả định URL của backend là localhost:3001
    axios
      .post("http://localhost:3001/api/films", { title, description })
      .then((response) => {
        setFilms((films) => [...films, response.data]);
      })
      .catch((error) => {
        console.error("Error adding film", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Thêm Phim Mới</h1>
      <div>
        <label>Tiêu Đề:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Mô Tả:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Thêm Phim</button>
    </form>
  );
}

export default AddFilm;
