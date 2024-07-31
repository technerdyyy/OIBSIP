import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// eslint-disable-next-line
const DATA = [
  { id: "todo-0", name: "Wake up", completed: true },
  { id: "todo-1", name: "Eat breakfast", completed: false },
  { id: "todo-2", name: "Learn React", completed: false },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
