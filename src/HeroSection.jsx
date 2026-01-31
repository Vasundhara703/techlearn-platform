import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1>Reimagine your career with our experts</h1>

          <p>
            Future-proof your skills with TechLearn. Get access to a variety
            of fresh content from real-world experts.
          </p>

          <ul className="features">
            <li>✨ Learn AI and more</li>
            <li>🧠 Practice with AI coaching</li>
            <li>🏆 Prep for a certification</li>
            <li>📈 Advance your career</li>
          </ul>

          <button className="cta">Learn more</button>
          <span className="price">Starting at ₹500/month</span>
        </div>

        {/* RIGHT VISUALS */}
        <div className="hero-visuals">
          <div className="card gradient-card"></div>
         

          <div className="card image-card">
            <img src="/teacher.jpg" alt="Instructor" />
          </div>

          <div className="card small-card">
            <img src="/images.jpg" alt="VR headset" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
