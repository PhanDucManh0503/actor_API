import React from "react";
import axios from "axios";
import styles from "./App.module.css";

const DeleteActor = ({ actorId, onActorDeleted }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/Api/v1/actors/${actorId}`)
      .then(() => {
        onActorDeleted();
        console.log(`Actor with ID ${actorId} deleted.`);
      })
      .catch((error) => console.error("Error deleting actor", error));
  };

  return (
    <div className={styles.deleteContainer}>
      <h2>Delete Actor</h2>
      <button onClick={handleDelete}>Delete Actor</button>
    </div>
  );
};

export default DeleteActor;
