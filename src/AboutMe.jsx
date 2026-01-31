import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-section" id="about">
      {/* Floating shapes */}
      <div className="floating-shape shape-circle"></div>
      <div className="floating-shape shape-triangle"></div>
      <div className="floating-shape shape-square"></div>

      <div className="about-container">
        <div className="about-card">
          <div className="about-text">
            <h2>About TechLearn</h2>
            <p>
              TechLearn is your go-to platform for daily coding challenges, tutorials, and tech insights.
              Our mission is to help learners build a consistent coding habit and grow their skills in web development, AI, and more.
            </p>
            <p>
              With interactive lessons, community support, and practical projects, TechLearn is designed to make learning fun and effective.
            </p>
          </div>
          <div className="about-image">
            <img src="/techlearn-logo.jpg" alt="TechLearn Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
