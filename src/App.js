// Nhập lại các import ở đây nếu cần
import React, { useState } from "react";
import ActorList from "./ActorList";
import CreateActor from "./CreateActor";
import ActorById from "./ActorById"; // Giả định rằng đây là component để lấy thông tin actor
import DeleteActor from "./DeleteActor"; // Giả định rằng đây là component để xóa actor
import UpdateActor from "./UpdateActor"; // Giả định rằng đây là component để cập nhật thông tin actor

function App() {
  const [currentView, setCurrentView] = useState("list");
  const [actorId, setActorId] = useState("");

  const handleActorIdChange = (e) => {
    setActorId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện action dựa trên currentView và actorId tại đây
  };

  const renderActionView = () => {
    switch (currentView) {
      case "add":
        return <CreateActor />;
      case "detail":
        return <ActorById actorId={actorId} />;
      case "delete":
        return <DeleteActor actorId={actorId} />;
      case "update":
        return <UpdateActor actorId={actorId} />;
      default:
        return <ActorList />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Actor Management</h1>
        <div>
          <button onClick={() => setCurrentView("list")}>Get Actor List</button>
          <button onClick={() => setCurrentView("add")}>Post New Actor</button>
          <button onClick={() => setCurrentView("detail")}>
            Get Actor by ID
          </button>
          <button onClick={() => setCurrentView("delete")}>
            Delete Actor by ID
          </button>
          <button onClick={() => setCurrentView("update")}>
            Update Actor by ID
          </button>
        </div>

        {(currentView === "detail" ||
          currentView === "delete" ||
          currentView === "update") && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Actor ID"
              value={actorId}
              onChange={handleActorIdChange}
            />
            <button type="submit">Submit ID</button>
          </form>
        )}

        <div>{renderActionView()}</div>
      </header>
    </div>
  );
}

export default App;
