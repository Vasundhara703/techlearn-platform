import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>Leaderboard & Testimonials</h2>

      {/* Floating Shapes */}
      <div className="testimonial-shape shape-circle"></div>
      <div className="testimonial-shape shape-square"></div>
      <div className="testimonial-shape shape-triangle"></div>

      <div className="testimonials-container">
        {/* Leaderboard Card */}
        <div className="leaderboard-card">
          <h3>Leaderboard</h3>
          <ol>
            <li><strong>Aarav</strong> – 1m 20s</li>
            <li><strong>Sneha</strong> – 1m 45s</li>
            <li><strong>Rohit</strong> – 2m 10s</li>
            <li><strong>Vasundhara</strong> – 2m 25s</li>
          </ol>
        </div>

        {/* Testimonials Card */}
        <div className="testimonial-card">
          <h3>What Learners Say</h3>
          <div className="testimonial">
            <p>"TechLearn made coding fun and easy to follow! The daily challenges are perfect."</p>
            <span>- Aarav</span>
          </div>
          <div className="testimonial">
            <p>"I improved my problem-solving skills in just a few weeks. Love the interactive lessons!"</p>
            <span>- Sneha</span>
          </div>
          <div className="testimonial">
            <p>"The community support is amazing. Always someone to guide you when you get stuck."</p>
            <span>- Rohit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
