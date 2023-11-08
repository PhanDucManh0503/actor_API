import React, { useState } from "react";
import axios from "axios";
import styles from "./App.module.css";

const DeleteActor = ({ onActorDeleted }) => {
  const [deleteActorId, setDeleteActorId] = useState("");

  const handleDelete = () => {
    if (deleteActorId) {
      axios
        .delete(`http://localhost:3000/api/v1/actors/${deleteActorId}`)
        .then(() => {
          onActorDeleted(deleteActorId);
          console.log(`Actor with ID ${deleteActorId} deleted.`);
          setDeleteActorId(""); // Clear the input after deletion
        })
        .catch((error) => console.error("Error deleting actor", error));
    } else {
      alert("Please enter an Actor ID.");
    }
  };

  return (
    <div className={styles.deleteContainer}>
      <h2>Delete Actor</h2>
      <input
        type="text"
        placeholder="Enter Actor ID"
        value={deleteActorId}
        onChange={(e) => setDeleteActorId(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleDelete} className={styles.button}>
        Delete Actor
      </button>
    </div>
  );
};

export default DeleteActor;
