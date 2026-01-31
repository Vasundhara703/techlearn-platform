import "./ExpertsSection.css";

const experts = [
  {
    name: "Aarav Mehta",
    role: "AI Research Scientist",
    image: "/aarav.jpg",
  },
  {
    name: "Neha Sharma",
    role: "Machine Learning Engineer",
    image: "/neha.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Data Scientist",
    image: "/rahul.jpg",
  },
  {
    name: "Priya Nair",
    role: "Product AI Lead",
    image: "/priya.jpg",
  },
];

const ExpertsSection = () => {
  return (
    <section className="experts">
      <div className="experts-container">

        <div className="experts-header">
          <h2>Learn from industry experts</h2>
          <p>
            Get insights, guidance, and mentorship from professionals shaping
            the future of AI.
          </p>
        </div>

        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div className="expert-card" key={index}>
              <img src={expert.image} alt={expert.name} />
              <h3>{expert.name}</h3>
              <span>{expert.role}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertsSection;
