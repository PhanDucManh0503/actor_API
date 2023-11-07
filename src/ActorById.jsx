import React, { useState } from "react";

const ActorById = ({ action }) => {
  const [actorId, setActorId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Phụ thuộc vào prop 'action', bạn có thể thực hiện gọi API tương ứng ở đây
    console.log(`${action} actor with ID: ${actorId}`);
    // Xử lý tiếp với actorId, ví dụ gọi API hoặc thay đổi state khác...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={actorId}
        onChange={(e) => setActorId(e.target.value)}
        placeholder="Enter Actor ID"
        required
      />
      <button type="submit">{action} Actor</button>
    </form>
  );
};

export default ActorById;
