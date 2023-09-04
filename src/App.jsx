import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Rout from "./routes/Rout";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./firebase_setup/firebase";

// import { firestore } from "../src/firebase_setup/firebase";

function App() {

  return (
    <Router>
      <Rout />
    </Router>
  );
}

export default App;
