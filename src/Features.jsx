import React from "react";
import "./Features.css";

export default function Features({ id }) {
  const features = [
    { title: "Daily Challenges", desc: "Sharpen your coding skills with small daily exercises designed for all levels." },
    { title: "Interactive Tutorials", desc: "Learn concepts step-by-step and apply them in hands-on projects." },
    { title: "Community Support", desc: "Join a community of learners to ask questions, share ideas, and grow together." },
    { title: "Progress Tracking", desc: "Track your progress and see your improvements over time with analytics." },
    { title: "Expert Guidance", desc: "Get help and insights from industry professionals and mentors." },
    { title: "Coding Contests", desc: "Participate in fun coding competitions to test your skills." },
    { title: "Certificates", desc: "Earn certificates for completed courses and challenges." },
    { title: "Live Coding Sessions", desc: "Attend live sessions and workshops with experienced developers." },
  ];

  return (
    <section className="features-section" id={id}>
      <h2 className="section-title">Why TechLearn?</h2>

      <div className="features-track">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {features.map((feature, index) => (
          <div className="feature-card" key={"dup-" + index}>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
