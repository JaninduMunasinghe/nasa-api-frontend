import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Protected from "./components/Protected.jsx";
import MarsExplorer from "./pages/MarsExplorer.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Protected />}>
        <Route path="/home" index element={<Home />} />
        <Route path="/mars-rover" index element={<MarsExplorer />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  /*<RouterProvider router={router} />*/
  <App />
);
