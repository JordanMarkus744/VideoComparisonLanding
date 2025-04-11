// src/App.js
import React, { useState } from "react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [showFeatures, setShowFeatures] = useState(false);

  const features = [
    "Side-by-side video comparison",
    "Frame-by-frame analysis",
    "Drawing tools for swing analysis",
    "Easy video import",
  ];

  const handleButtonClick = () => {
    // your button logic here

    if (typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "Button",
        event_label: "Compare Videos Button",
      });
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">▶</span>
          <span className="logo-text">VideoCompare</span>
        </div>
        <nav>
          <a
            href="https://github.com/JordanMarkus744/GolfSwingVideoComparison"
            className="github-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="github-icon">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </span>
            <span>GitHub</span>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1 className="hero-title">Video Compare</h1>
            <p className="hero-description">
              Compare two videos side-by-side with ease. A fast, simple desktop
              app for side-by-side visual analysis perfect for golf swing
              improvement.
            </p>

            <div className="button-group">
              <a
                href="https://github.com/JordanMarkus744/GolfSwingVideoComparison/releases/download/V1.0.0/Golf.Swing.Comparison.Setup.1.0.0.exe"
                className="download-button"
                target="_blank"
                rel="noreferrer"
                onClick={handleDownloadClick}
              >
                <span className="download-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                Download for Windows
              </a>

              <button
                onClick={() => setShowFeatures(!showFeatures)}
                className="learn-more-button"
              >
                Learn More
                <span
                  className={`chevron-icon ${showFeatures ? "chevron-up" : ""}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
            </div>

            {/* Features Section */}
            {showFeatures && (
              <div className="features-box">
                <h3 className="features-title">Key Features</h3>
                <ul className="features-list">
                  {features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <div className="feature-dot"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="hero-image-container">
            <img
              src="/UI.JPG"
              alt="UI of VideoComparison app showing side-by-side comparison"
              className="app-screenshot"
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">Built with ❤️ using Electron</p>

        {/* Vercel Analytics */}
        <Analytics />
        <SpeedInsights />
      </footer>
    </div>
  );
}

export default App;
