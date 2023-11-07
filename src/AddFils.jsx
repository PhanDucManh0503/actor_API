import React, { useState } from "react";
import axios from "axios";

const AddFilm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/films", {
        title,
        description,
      });
      onAdd(response.data); // Update the film list
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding film:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Film</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Film</button>
    </form>
  );
};

export default AddFilm;
