import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContext from "./store/context/AppContext.jsx";
import { Provider } from "react-redux";
import store from "./store/slices/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <AppContext>
        <App />
      </AppContext>
    </Provider>
);
