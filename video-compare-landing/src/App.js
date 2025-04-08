// src/App.js
import React from "react";
import "./App.css";
import appImage from "./assets/UI.JPG";

function App() {
  return (
    <div className="App">
      <h1>VideoCompare</h1>
      <p>
        Compare two videos side-by-side with ease. A fast, simple desktop app
        for side-by-side visual analysis.
      </p>
      <a
        href="https://github.com/JordanMarkus744/GolfSwingVideoComparison/releases/download/V1.0.0/Golf.Swing.Comparison.Setup.1.0.0.exe"
        className="button"
        target="_blank"
        rel="noreferrer"
      >
        Download for Windows
      </a>
      <img
        src={appImage}
        alt="UI of Video Comparison app"
        className="app-image"
      />
      <footer>Built with ❤️ using Electron</footer>
    </div>
  );
}

export default App;
