import React, { useState } from "react";
import axios from "axios";
import ActorList from "./ActorList";
import CreateActor from "./CreateActor";
import ActorDetail from "./ActorDetail";
import UpdateActor from "./UpdateActor";
import styles from "./App.module.css";

function DashBoard() {
  const [currentView, setCurrentView] = useState("list");
  const [actorId, setActorId] = useState("");
  const [actors, setActors] = useState([]);

  // Xử lý thay đổi ID khi người dùng nhập vào
  const handleActorIdChange = (e) => {
    setActorId(e.target.value);
  };

  // Xử lý khi người dùng submit ID để xem chi tiết hoặc xóa
  const handleSubmit = (e) => {
    e.preventDefault();
    if (actorId) {
      if (currentView === "delete") {
        // Gọi hàm xóa actor
        deleteActorById(actorId);
      } else {
        setCurrentView("detail");
      }
    } else {
      alert("Please enter an Actor ID.");
    }
  };

  // Function để xóa actor bằng ID
  const deleteActorById = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/actors/${id}`)
      .then(() => {
        setActors(actors.filter((actor) => actor.id !== id));
        alert(`Actor with ID ${id} deleted.`);
        setCurrentView("list"); // Quay lại danh sách sau khi xóa
      })
      .catch((error) => {
        console.error("Error deleting actor", error);
        alert("An error occurred while trying to delete the actor.");
      });
  };

  // Function để load danh sách actors từ API
  const loadActorsFromApi = () => {
    axios
      .get("http://localhost:3000/api/v1/actors")
      .then((response) => {
        setActors(response.data);
      })
      .catch((error) => console.error("Error loading actors", error));
  };

  // Xử lý render view tương ứng dựa trên currentView
  const renderActionView = () => {
    switch (currentView) {
      case "list":
        return <ActorList actors={actors} />;
      case "add":
        return <CreateActor />;
      case "detail":
        return <ActorDetail actorId={actorId} />;
      case "delete":
        // DeleteActor không cần nữa vì đã xử lý trong App
        return null;
      case "update":
        return <UpdateActor actorId={actorId} />;
      default:
        return <ActorList actors={actors} />;
    }
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>Actor Management</h1>
        <div className={styles.buttonGroup}>
          <button onClick={loadActorsFromApi} className={styles.button}>
            Get Actor List
          </button>
          <button
            onClick={() => setCurrentView("add")}
            className={styles.button}
          >
            Create New Actor
          </button>
          <button
            onClick={() => setCurrentView("detail")}
            className={styles.button}
          >
            Get Actor by ID
          </button>
          <button
            onClick={() => setCurrentView("delete")}
            className={styles.button}
          >
            Delete Actor by ID
          </button>
          <button
            onClick={() => setCurrentView("update")}
            className={styles.button}
          >
            Update Actor by ID
          </button>
        </div>

        {(currentView === "detail" || currentView === "delete") && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Enter Actor ID"
              value={actorId}
              onChange={handleActorIdChange}
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              {currentView === "delete" ? "Delete Actor" : "View Actor"}
            </button>
          </form>
        )}

        {renderActionView()}
      </header>
    </div>
  );
}

export default DashBoard;
