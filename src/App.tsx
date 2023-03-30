import React from "react";
import { RouterProvider } from "react-router-dom";

import "./App.css";
// const cssLink = localStorage.getItem('dark_mode') ? "./assets/css/dark.css" : "./assets/css/light.css"
import "./assets/css/dark.css";
import "./assets/css/style.css";

import { router } from "./router";

const App = () => <RouterProvider router={router} />;

export default App;
