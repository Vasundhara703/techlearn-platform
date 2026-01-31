import React, { useState } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Features from "./Features";
import Testimonials from "./Testimonials";
import GlobalStats from "./GlobalStats";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import ExpertsSection from "./ExpertsSection";

export default function App() {
  // ---------------- Problems Array ----------------
  const problems = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      description:
        "Given an array of integers and a target, return indices of two numbers that add up to the target.",
      starterCode: "// Write your solution here\nfunction twoSum(nums, target) {\n  \n}",
      test: (func) => func([2, 7, 11, 15], 9),
      expected: [0, 1],
      funcName: "twoSum",
      hint: "Try using a hashmap for quick lookups.",
    },
    {
      title: "Reverse String",
      difficulty: "Easy",
      description: "Write a function that reverses a string.",
      starterCode: "// Write your solution here\nfunction reverseString(s) {\n  \n}",
      test: (func) => func("hello"),
      expected: "olleh",
      funcName: "reverseString",
      hint: "You can use built-in split, reverse and join methods.",
    },
    {
      title: "Maximum Number",
      difficulty: "Medium",
      description: "Return the maximum number from an array of integers.",
      starterCode: "// Write your solution here\nfunction maxNumber(arr) {\n  \n}",
      test: (func) => func([5, 3, 9, 1]),
      expected: 9,
      funcName: "maxNumber",
      hint: "Iterate through the array and keep track of the largest value.",
    },
  ];

  // ---------------- States ----------------
  const [currentProblem, setCurrentProblem] = useState(0);
  const [code, setCode] = useState(problems[0].starterCode);
  const [output, setOutput] = useState("");
  const [attempts, setAttempts] = useState(0);

  // ---------------- Run Code ----------------
  const handleRun = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(typeof result === "object" ? JSON.stringify(result) : result);
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  // ---------------- Submit ----------------
  const handleSubmit = () => {
    try {
      const problem = problems[currentProblem];
      const func = new Function(
        `${problem.funcName}`,
        code +
          `; if(typeof ${problem.funcName} !== 'function') throw new Error('Define a function named ${problem.funcName}'); return ${problem.funcName}(...arguments);`
      );

      const result = problem.test(func);

      if (JSON.stringify(result) === JSON.stringify(problem.expected)) {
        setOutput("✅ Correct!");
        setAttempts(0);

        // Move to next problem after 2 sec
        if (currentProblem + 1 < problems.length) {
          setTimeout(() => {
            setCurrentProblem(currentProblem + 1);
            setCode(problems[currentProblem + 1].starterCode);
            setOutput("");
          }, 2000);
        } else {
          setOutput("🎉 All problems completed!");
        }
      } else {
        setOutput("❌ Wrong answer. Try again!");
        setAttempts((prev) => prev + 1);
      }
    } catch (err) {
      setOutput("Error: " + err.message);
      setAttempts((prev) => prev + 1);
    }
  };

  return (
    <>
      {/* Global Stats */}
      <GlobalStats />

      {/* Header */}
      <Header />

      {/* Hero & About Sections */}
      <AboutMe />
      <HeroSection />

      {/* Main Container */}
      <div className="container">
        <Features />

        {/* Coding Challenge Section */}
        <div className="grid">
          {/* Main Coding Area */}
          <div className="card main-card">
            <div className="title-row">
              <h2>{problems[currentProblem].title}</h2>
              <span
                className={`badge ${problems[currentProblem].difficulty.toLowerCase()}`}
              >
                {problems[currentProblem].difficulty}
              </span>
            </div>

            <p className="problem-statement">{problems[currentProblem].description}</p>

            <textarea
              className="code-editor"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            {/* Action Buttons */}
            <div className="actions">
              <button className="secondary" onClick={handleRun}>
                Run Code
              </button>
              <button className="primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>

            {/* Output */}
            <div className="output">
              <strong>Output:</strong> {output}
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Stats */}
            <div className="card stats-card">
              <h3>Today's Stats</h3>
              <ul>
                <li>Attempts: 12,430</li>
                <li>Success Rate: 68%</li>
                <li>Avg Time: 12 mins</li>
              </ul>
            </div>

            {/* Hint */}
            <div className="card hint-card">
              <h3>Hint</h3>
              <p className={attempts >= 3 ? "unlocked" : "locked"}>
                {attempts >= 3
                  ? problems[currentProblem].hint
                  : "Hint locked! Solve at least 3 attempts to unlock."}
              </p>
            </div>

            {/* Subscribe */}
            <div className="card subscribe-card">
              <h3>Subscribe for Updates</h3>
              <button className="primary">Notify Me</button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials id="testimonials" />
      </div>

      {/* Experts Section */}
      <ExpertsSection />

      {/* Footer */}
      <div className="container">
        <Footer />
      </div>
    </>
  );
}
