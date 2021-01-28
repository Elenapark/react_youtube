import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

// 연결해주는 역할만 하는 javascript.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);