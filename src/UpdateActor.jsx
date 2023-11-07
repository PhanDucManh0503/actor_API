import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./App.module.css";

const UpdateActor = ({ actorId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Api/v1/actors/${actorId}`)
      .then((response) => {
        const actor = response.data;
        setFirstName(actor.first_name);
        setLastName(actor.last_name);
      })
      .catch((error) => console.error("Error fetching actor details", error));
  }, [actorId]);

  const handleUpdate = () => {
    axios
      .put(`/api/actors/${actorId}`, {
        first_name: firstName,
        last_name: lastName,
      })
      .then((response) => {
        console.log("Actor updated:", response.data);
      })
      .catch((error) => console.error("Error updating actor", error));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Update Actor</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Actor</button>
    </div>
  );
};

export default UpdateActor;
