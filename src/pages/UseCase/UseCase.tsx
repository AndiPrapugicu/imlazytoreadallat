import React from "react";
import "./UseCase.css";

const UseCase: React.FC = () => {
  const useCases = [
    {
      title: "Students",
      workflows: [
        "Summarize long research papers",
        "Turn textbooks into audio lessons",
        "Save time on reading assignments",
      ],
    },
    {
      title: "Professionals",
      workflows: [
        "Condense meeting notes into key points",
        "Listen to reports on the go",
        "Stay productive without reading everything",
      ],
    },
  ];

  const personalUseCases = [
    {
      title: "Casual Readers",
      workflows: [
        "Summarize novels or articles",
        "Turn blogs into podcasts",
        "Catch up on news without reading",
      ],
    },
    {
      title: "Lazy Enthusiasts",
      workflows: [
        "Skip the fluff, get the gist",
        "Listen to summaries while relaxing",
        "Enjoy content without lifting a finger",
      ],
    },
  ];

  return (
    <div className="use-case-container">
      <header className="use-case-header">
        <h1>
          How <span className="highlight">Students</span> and{" "}
          <span className="highlight">Professionals</span> Use Our App?
        </h1>
        <p>
          Whether you're cramming for exams or trying to stay on top of work,
          our app helps you save time by summarizing content and letting you
          listen to it. Work smarter, not harder!
        </p>
      </header>

      <div className="use-case-grid">
        {useCases.map((useCase, index) => (
          <div key={index} className="use-case-card">
            <h3>{useCase.title}</h3>
            <ul>
              {useCase.workflows.map((workflow, idx) => (
                <li key={idx}>
                  <span className="icon">✔️</span> {workflow}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <header className="use-case-header">
        <h1>
          How <span className="highlight">Casual Readers</span> and{" "}
          <span className="highlight">Lazy Enthusiasts</span> Use Our App?
        </h1>
        <p>
          For those who just want to chill and avoid reading, we've got you
          covered. Summarize, listen, and enjoy content without breaking a
          sweat. It's laziness, but productive!
        </p>
      </header>

      <div className="use-case-grid">
        {personalUseCases.map((useCase, index) => (
          <div key={index} className="use-case-card">
            <h3>{useCase.title}</h3>
            <ul>
              {useCase.workflows.map((workflow, idx) => (
                <li key={idx}>
                  <span className="icon">✔️</span> {workflow}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCase;
