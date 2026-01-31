import React from "react";
import "./Courses.css";

const coursesData = [
  {
    name: "HTML & CSS Fundamentals",
    time: "2 hours",
    description: "Learn the basics of building web pages using HTML and CSS.",
    level: "Basic",
  },
  {
    name: "JavaScript Essentials",
    time: "3 hours",
    description: "Understand JavaScript fundamentals and start interactive programming.",
    level: "Beginner",
  },
  {
    name: "React & Frontend Development",
    time: "5 hours",
    description: "Build dynamic UIs using React and manage state effectively.",
    level: "Hard",
  },
  {
    name: "AI & Machine Learning Basics",
    time: "4 hours",
    description: "Introduction to AI concepts, ML workflow, and practical examples.",
    level: "Beginner",
  },
];

export default function Courses() {
  return (
    <section className="courses-section" id="courses">
      <h2>Our Courses</h2>
      <div className="courses-container">
        {coursesData.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-header">
              <h3>{course.name}</h3>
              <span className={`level ${course.level.toLowerCase()}`}>{course.level}</span>
            </div>
            <p className="course-desc">{course.description}</p>
            <p className="course-time">⏱ {course.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
