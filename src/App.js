import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{ marginTop: "64px" }}>
        <p>Hola</p>
      </main>
    </div>
  );
}

export default App;
