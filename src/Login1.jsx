import { useState } from "react";
import PropTypes from "prop-types";
import "./Login1.css";

async function loginUser(credentials) {
  try {
    const response = await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Could not log in:", error);
    // Handle errors here, like showing an error message to the user
  }
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add an error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });

    if (token) {
      setToken(token);
    } else {
      setError("Login failed!"); // Update error state
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {error && <div className="error-message">{error}</div>}{" "}
      {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
