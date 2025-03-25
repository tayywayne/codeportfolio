import { useState } from "react";

const experiences = [
    {
      title: "BS in Software Enginearing at WGU",
      duration: "2024-Present",
      details: [
        { text: "Currently working on my BS in software engineering where I study web and mobile development, UI/UX, datastucters and algorithms and general scripting and programing."},
      ],
      tags: ["Python", "Data Structers", "SQL", "Java", "AngularJS",],
    },
    {
        title: "Full Stack Developer Program at Hack Reactor",
        duration: "2023",
        details: [
          { text: "Compleated the 19-week full time programming bootcamp"},
          { text: "Worked in teams with other students to build out full-stack applications" }
        ],
        tags: ["Python", "Java Script", "Django", "Fast API"],
      },

  ];

function Edu() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="experience-container">
        <h2>Education</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div
              className={`experience-header ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleDropdown(index)}
            >
              <span>
                {exp.title} 
              </span>
              <span>{exp.duration}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>
  
            {openIndex === index && exp.details && (
              <div className="experience-details">
                <ul className="experience-links">
                  {exp.details.map((detail, i) => (
                    <li key={i}>
                      {detail.text} <a href="#">{detail.link}</a>
                    </li>
                  ))}
                </ul>
                {exp.tags && (
                  <div className="tags">
                    {exp.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
  );
}
export default Edu