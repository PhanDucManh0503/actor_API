// import React, { useState } from "react";
// import axios from "axios";
// import styles from "./App.module.css";

// const CreateActor = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const handleCreate = () => {
//     axios
//       .post(
//         "http://localhost:3000/api/v1/actors?fbclid=IwAR1wk0OxFQycTys0KOFOKo3tOwW5PaW94PF1Hj48WmUW9C1p5adk1ekFEDo",
//         { first_name: firstName, last_name: lastName }
//       )
//       .then((response) => {
//         // Handle success
//         console.log("Actor created:", response.data);
//       })
//       .catch((error) => console.error("Error creating actor", error));
//   };

//   return (
//     <div className={styles.formContainer}>
//       <h2>Create New Actor</h2>
//       <input
//         type="text"
//         placeholder="First Name"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <button onClick={handleCreate}>Create Actor</button>
//     </div>
//   );
// };

// export default CreateActor;

import React, { useState } from "react";
import axios from "axios";
import styles from "./App.module.css";

const ActorsList = () => {
  const [actors, setActors] = useState([]);

  const loadActors = () => {
    axios
      .get("http://localhost:3000/api/v1/actors")
      .then((response) => {
        setActors(response.data);
      })
      .catch((error) => console.error("Error loading actors", error));
  };

  return (
    <div>
      <button className={styles.button} onClick={loadActors}>
        Load Actor List
      </button>
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
    </div>
  );
};

const CreateActor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleCreate = () => {
    axios
      .post("http://localhost:3000/api/v1/actors", {
        first_name: firstName,
        last_name: lastName,
      })
      .then((response) => {
        console.log("Actor created:", response.data);
        // Optionally, you can clear the input fields after successful creation
        setFirstName("");
        setLastName("");
      })
      .catch((error) => console.error("Error creating actor", error));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Create New Actor</h2>
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
      <button onClick={handleCreate}>Create Actor</button>
    </div>
  );
};

const App = () => {
  return (
    <div className={styles.appContainer}>
      <ActorsList />
      <CreateActor />
    </div>
  );
};

export default App;
