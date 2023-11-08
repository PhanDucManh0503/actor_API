import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./DashBoard";
import Login from "./Login1.jsx";
import Preferences from "./Preferences";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
