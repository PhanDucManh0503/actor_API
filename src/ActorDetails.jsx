import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./App.module.css";

const ActorDetail = ({ actorId }) => {
  const [actor, setActor] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Api/v1/actors/${actorId}`)
      .then((response) => {
        console.log(response); // Xem chi tiết response nhận được
        setActor(response.data);
      })
      .catch((error) => console.error("Error fetching actor details", error));
  }, [actorId]);

  if (!actor) return <div>Loading...</div>;

  return (
    <div className={styles.actorDetails}>
      <h2>Actor Details</h2>
      <p>
        <strong>First Name:</strong> {actor.first_name}
      </p>
      <p>
        <strong>Last Name:</strong> {actor.last_name}
      </p>
      <p>
        <strong>Last Update:</strong> {actor.last_update}
      </p>
    </div>
  );
};

export default ActorDetail;
