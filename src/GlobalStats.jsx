import React, { useState, useEffect } from "react";
import "./GlobalStats.css";

const statsData = [
  { id: 1, label: "🌍 Customers Registered", value: 12430 },
  { id: 2, label: "💻 Challenges Solved", value: 54210 },
  { id: 3, label: "🏆 Leaderboard Participants", value: 3120 },
];

export default function GlobalStats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [visible, setVisible] = useState(statsData.map(() => true));
  const [closing, setClosing] = useState(statsData.map(() => false));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      let current = 0;
      const increment = Math.ceil(stat.value / 150);

      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(intervals[index]);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = current;
          return newCounts;
        });
      }, 25);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  const handleClose = (index) => {
    setClosing((prev) => {
      const newClosing = [...prev];
      newClosing[index] = true;
      return newClosing;
    });

    // After animation, hide the card completely
    setTimeout(() => {
      setVisible((prev) => {
        const newVisible = [...prev];
        newVisible[index] = false;
        return newVisible;
      });
    }, 300); // match CSS transition duration
  };

  return (
    <div className="floating-stats-container">
      {statsData.map(
        (stat, idx) =>
          visible[idx] && (
            <div
              key={stat.id}
              className={`floating-stat-card ${closing[idx] ? "closing" : ""}`}
            >
              <button className="close-btn" onClick={() => handleClose(idx)}>
                ×
              </button>
              <h4>{stat.label}</h4>
              <p className="count">{counts[idx].toLocaleString()}</p>
            </div>
          )
      )}
    </div>
  );
}
