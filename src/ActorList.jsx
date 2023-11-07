import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./App.module.css";

const ActorList = ({ onSelectActor }) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/api/v1/actors?fbclid=IwAR1wk0OxFQycTys0KOFOKo3tOwW5PaW94PF1Hj48WmUW9C1p5adk1ekFEDo"
      )
      .then((response) => {
        setActors(response.data);
      })
      .catch((error) => console.error("Error fetching actors", error));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Actor List</h1>
      {actors.map((actor) => (
        <div key={actor.actor_id} className={styles.actorItem}>
          <span>
            {actor.first_name} {actor.last_name}
          </span>
          <button onClick={() => onSelectActor(actor.actor_id)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ActorList;
