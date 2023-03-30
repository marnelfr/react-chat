import React from "react";
import "./App.css";
import "./assets/css/dark.css";
import "./assets/css/style.css";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Conversation from "./components/Conversation/Conversation";

function App() {
  return (
    <div className="layout overflow-hidden">
      <Navigation />
      <Sidebar />
      <Conversation />
    </div>
  );
}

export default App;
