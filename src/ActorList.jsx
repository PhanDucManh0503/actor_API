import React from "react";
import styles from "./App.module.css";

const ActorList = ({ actors }) => {
  return (
    <div className={styles.formContainer}>
      {actors && actors.length > 0 && (
        <div className={styles.actorsList}>
          <h4>Actor List from SAKILA</h4>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Last Update</th>
              </tr>
            </thead>
            <tbody>
              {actors.map((actor) => (
                <tr key={actor.actor_id}>
                  <td>{actor.actor_id}</td>
                  <td>{actor.first_name}</td>
                  <td>{actor.last_name}</td>
                  <td>{actor.last_update}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ActorList;
