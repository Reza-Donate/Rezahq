import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Routes from "./routes/Routes";
import Rout from "./routes/Rout";

function App() {
  return (
    <Router>
      <Rout />
    </Router>
  );
}

export default App;
