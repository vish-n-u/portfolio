import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AnimatedDiv from "./trial";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
if (process.env.NODE_ENV !== "development") {
  console.log = () => {};
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/trial",
    element: <AnimatedDiv />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
