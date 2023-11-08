import React, { useState } from "react";
import axios from "axios";
import styles from "./App.module.css";

const UpdateActor = () => {
  const [actorId, setActorId] = useState(""); // Add state for actorId
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [actorDetailsFetched, setActorDetailsFetched] = useState(false);

  const fetchActorDetails = (id) => {
    axios
      .get(`http://localhost:3000/api/v1/actors/${id}`)
      .then((response) => {
        const actor = response.data;
        setFirstName(actor.first_name);
        setLastName(actor.last_name);
        setActorDetailsFetched(true); // Update the fetched state to true
      })
      .catch((error) => {
        console.error("Error fetching actor details", error);
        alert("Could not fetch actor details.");
      });
  };

  const handleUpdate = () => {
    axios
      .patch(`http://localhost:3000/api/v1/actors/${actorId}`, {
        first_name: firstName,
        last_name: lastName,
      })
      .then((response) => {
        alert("Actor updated successfully!");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert("ID not found");
        } else {
          console.error("Error updating actor", error);
          alert("An error occurred while trying to update the actor.");
        }
      });
  };

  return (
    <div className={styles.formContainer}>
      <h2>Update Actor</h2>
      <input
        type="text"
        placeholder="Actor ID"
        value={actorId}
        onChange={(e) => setActorId(e.target.value)}
        onBlur={() => fetchActorDetails(actorId)} // Fetch details when user leaves the input field
      />
      {actorDetailsFetched && ( // Only show the form if actor details have been fetched
        <>
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
          <button onClick={handleUpdate}>Save</button>
        </>
      )}
    </div>
  );
};

export default UpdateActor;
