import "./App.css";
import React from "react";
import DiceMatchLayout from "./layout/DiceMatchLayout.js";
import Navigation from "./layout/Navigation.js";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <DiceMatchLayout />
    </div>
  );
}
